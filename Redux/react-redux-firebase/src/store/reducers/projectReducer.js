const initialState = {
    projects: [
        { id: 1, title: 'First Project', content: 'Batman is the hero gotham derseves but not the one it needs right now' },
        { id: 2, title: 'Second Project', content: 'Batman is the hero gotham derseves but not the one it needs right now' },
        { id: 3, title: 'Third Project', content: 'Batman is the hero gotham derseves but not the one it needs right now' },
        { id: 4, title: 'Fourth Project', content: 'Batman is the hero gotham derseves but not the one it needs right now' },
    ]
}

const projectReducer = (state = initialState, action) => {
    return state
}

export default projectReducer