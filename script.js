const taskList = []
const listElement = document.getElementById("tasklist")
const status = document.getElementById("status")

// Speech Recognition

const SpeechRecognition = window.SpeechRecognition

const recognition = new SpeechRecognition()

recognition.continuous = false
recognition.lang = 'en-US'
