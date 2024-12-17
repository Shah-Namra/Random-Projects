const responses = {
    greeting: {
        triggers: ['hello', 'hi', 'hey', 'howdy'],
        responses: [
            'Hello! How can I help you today?',
            'Hi there! What can I do for you?',
            'Hey! Nice to meet you!'
        ]
    },
    farewell: {
        triggers: ['bye', 'goodbye', 'see you', 'later'],
        responses: [
            'Goodbye! Have a great day!',
            'See you later!',
            'Take care!'
        ]
    },
    help: {
        triggers: ['help', 'support', 'assist'],
        responses: [
            'I\'m here to help! What do you need assistance with?',
            'How can I assist you today?',
            'I\'d be happy to help! What\'s on your mind?'
        ]
    },
    cns: {
        triggers: ['cns', 'network security', 'computer network security'],
        responses: [
            'CNS Syllabus : <a href="https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3161606.pdf" target="_blank">Here</a> <br>Reading Material CNS : <a href="https://darshan.ac.in/gtu-study-material/2170709-Information-and-Network-Security" target="_blank">Here</a>'
        ]
    },
    ai: {
        triggers: ['ai', 'artificial intelligence'],
        responses: [
            'AI Syllabus : <a href="https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3170716.pdf" target="_blank">Here</a> <br>Reading Material AI : <a href="https://darshan.ac.in/gtu-study-material/3170716-Artificial-Intelligence" target="_blank">Here</a>'
        ]
    },
    mad: {
        triggers: ['mad', 'mobile application', 'mobile app'],
        responses: [
            'MAD Syllabus : <a href="https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/Syallbus/3170726.pdf" target="_blank">Here</a> <br>Reading Material MAD : <a href="https://darshan.ac.in/gtu-study-material/3170726-Mobile-Application-Development" target="_blank">Here</a>'
        ]
    },
    schedule: {
        triggers: ['schedule', 'internal', 'exam schedule'],
        responses: [
            'Internal\'s Schedule : <a href="file:///N:/Projects/Chat%20Bot/Exam.Schedule_sem_VI.pdf" target="_blank">Here</a>'
        ]
    },
    timetable: {
        triggers: ['timetable', 'time table'],
        responses: [
            'Click <a href="file:///N:/Projects/Chat%20Bot/TYIT2_TT.pdf" target="_blank">here</a> to see it'
        ]
    }
};

const fallbackResponses = [
    'I\'m not sure I understand. Could you rephrase that?',
    'I\'m still learning! Could you try asking in a different way?',
    'Hmm, I\'m not quite sure about that. Could you clarify?'
];

export function generateResponse(message) {
    const lowercaseMessage = message.toLowerCase();

    for (const [, data] of Object.entries(responses)) {
        if (data.triggers.some(trigger => lowercaseMessage.includes(trigger))) {
            return getRandomResponse(data.responses);
        }
    }

    return getRandomResponse(fallbackResponses);
}

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}