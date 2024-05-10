// Declare the Object Note:
export interface Note {
    id: number;
    title: string;
    text: string;
}

// Declare the array of notes:
export const NOTES: Note[] = [
    {
        id: 1,
        title: 'Episteme',
        text: 'In philosophy, episteme is knowledge or understanding. The term epistemology (the branch of philosophy concerning knowledge) is derived from episteme.',
    },
    {
        id: 2,
        title: 'Eudaimonia',
        text: 'It is a Greek word literally translating to the state or condition of "good spirit", and which is commonly translated as "happiness" or "welfare". In works of Aristotle, eudaimonia was the term for the highest human good in older Greek tradition.',
    },
];