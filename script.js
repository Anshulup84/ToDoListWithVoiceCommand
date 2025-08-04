const taskList = []
const listElement = document.getElementById("tasklist")
const statusText = document.getElementById("status")

// Speech Recognition

const SpeechRecognition = window.SpeechRecognition

const recognition = new SpeechRecognition()

recognition.continuous = false
recognition.lang = 'en-US'

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    statusText.innerText = `Heard: "${transcript}"`;
    if(transcript.startsWith("naya task")){
        const taskText = transcript.replace("naya task", "").trim()
        if(taskText)
            addTask(taskText);
    }
}

