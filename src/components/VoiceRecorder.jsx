import { useEffect, useRef, useState } from 'react';
import { Download, Mic, Square, Trash2 } from 'lucide-react';

export default function VoiceRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [audioExtension, setAudioExtension] = useState('webm');
  const [error, setError] = useState('');
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => () => {
    const recorder = recorderRef.current;
    if (recorder?.state === 'recording') {
      recorder.onstop = null;
      recorder.stop();
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  }, [audioUrl]);

  const start = async () => {
    setError('');
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setError('This browser does not support local audio recording. You can still use the listening and reading exercises.');
      return;
    }
    try {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioUrl('');
      chunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => { if (event.data.size > 0) chunksRef.current.push(event.data); };
      recorder.onstop = () => {
        const type = recorder.mimeType || 'audio/webm';
        const blob = new Blob(chunksRef.current, { type });
        const extension = type.includes('mp4') ? 'm4a' : type.includes('ogg') ? 'ogg' : 'webm';
        setAudioExtension(extension);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        setRecording(false);
      };
      recorder.start();
      setRecording(true);
    } catch (caught) {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      const message = caught?.name === 'NotAllowedError'
        ? 'Microphone access was denied. Allow microphone access in your browser settings to record.'
        : 'The microphone could not be started. Check the device and try again.';
      setError(message);
    }
  };

  const stop = () => {
    if (recorderRef.current?.state === 'recording') recorderRef.current.stop();
  };

  const clear = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl('');
    setError('');
  };

  return (
    <section className="voice-recorder" aria-labelledby="voice-recorder-title">
      <div className="voice-recorder-heading"><span className="voice-recorder-icon"><Mic size={18} /></span><div><h3 id="voice-recorder-title">Record yourself</h3><p>Say a tone pair or one sentence, then listen back. Your recording stays in this browser and is never uploaded.</p></div></div>
      <div className="voice-recorder-actions">{recording ? <button className="button button-dark" type="button" onClick={stop}><Square size={14} /><span>Stop recording</span></button> : <button className="button button-coral" type="button" onClick={start}><Mic size={15} /><span>{audioUrl ? 'Record again' : 'Start recording'}</span></button>}{audioUrl && <button className="text-link" type="button" onClick={clear}><Trash2 size={14} />Clear recording</button>}</div>
      {recording && <p className="recording-status" role="status"><span className="recording-dot" />Recording on this device…</p>}
      {audioUrl && <div className="recording-playback"><audio src={audioUrl} controls aria-label="Your Vietnamese practice recording" /><a className="text-link" href={audioUrl} download={`vietsound-practice.${audioExtension}`}><Download size={14} />Download audio</a></div>}
      {error && <p className="recording-error" role="alert">{error}</p>}
    </section>
  );
}
