import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";


const Notepad = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="bg-[#2F2F2F] mt-8 w-full max-w-4xl mx-auto p-4 rounded-md">
      <h1 className='text-2xl text-white mb-5 text-start'>Notepad</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md outline-none"
          placeholder="Enter a note"
        />
        <button
          onClick={handleAddNote}
          className="p-2 bg-[#171717] text-white rounded-md"
        >
          Note
        </button>
      </div>
      
      {notes.length > 0 && (
        <table className="min-w-full bg-[#808080] mt-10 rounded-md">
          <thead className='flex'>
            <tr className='flex justify-between'>
              <th className="py-2 pl-5">Notes</th>
            </tr>
          </thead>
          <tbody className=''>
            {notes.map((note, index) => (
              <tr key={index} className="border-t space-x-5">
                <td className="py-2 pl-5 text-justify ">{note}</td>
                <td className="flex justify-end py-2 pr-5">
                  <button
                    onClick={() => handleDeleteNote(index)}
                    className="bg-red-500 text-white px-2 py-2 rounded-full"
                  >
                    <MdDeleteForever size={24}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Notepad;
