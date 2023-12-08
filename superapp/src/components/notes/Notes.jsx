import React, { useEffect, useState } from 'react';
import styles from './Notes.module.css';

const defaultText = "This is how I am going to learn MERN Stack in the next 3 months.";

const Notes = () => {
  // State to manage the content of the notes
  const [notes, setNotes] = useState('');

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');

    // Set the default text if there are no saved notes
    if (!savedNotes) {
      setNotes(defaultText);
    } else {
      setNotes(savedNotes);
    }
  }, []);

  // Event handler to handle input change
  const handleChange = (e) => {
    const updatedNotes = e.target.value;
    setNotes(updatedNotes);

    // Save updated notes to local storage
    localStorage.setItem('notes', updatedNotes);
  };

  return (
    <div className={styles.noteSection}>
      <h2 className={styles.heading}>All notes</h2>
      <textarea
        value={notes}
        onChange={handleChange}
        className={`${styles.noteSection} ${styles.styledText}`}
        style={{ resize: 'none' }}
      />
    </div>
  );
};

export default Notes;