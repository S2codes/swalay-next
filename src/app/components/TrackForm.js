// pages/new-track.js
"use client";
import { useState } from 'react';

export default function NewTrack() {
  const [primaryArtists, setPrimaryArtists] = useState(['']);
  const [producers, setProducers] = useState(['']);
  const [lyricists, setLyricists] = useState([{ name: '', ipi: '', iprs: 'Yes', role: '' }]);
  const [composers, setComposers] = useState([{ name: '', ipi: '', iprs: 'Yes', role: '' }]);

  const handleAddArtist = (setter) => {
    setter((prev) => [...prev, '']);
  };

  const handleAddPerson = (setter) => {
    setter((prev) => [...prev, { name: '', ipi: '', iprs: 'Yes', role: '' }]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Track Details</h1>
      <form>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Track Title</label>
            <input type="text" placeholder="Song Title" className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Track Category</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>Select Song Category</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Audio File (Max 128M)</label>
            <input type="file" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Caller Tune Time (HH:MM:SS)</label>
            <input type="text" placeholder="00:00:00" className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Track Type</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>Select Track Type</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Version</label>
            <select className="w-full px-3 py-2 border rounded">
              <option>Remix</option>
              {/* Add options here */}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Track Artist(s) - Primary</label>
          {primaryArtists.map((artist, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Singer Name"
                className="flex-grow px-3 py-2 border rounded"
                value={artist}
                onChange={(e) => {
                  const newArtists = [...primaryArtists];
                  newArtists[index] = e.target.value;
                  setPrimaryArtists(newArtists);
                }}
              />
              <button
                type="button"
                onClick={() => handleAddArtist(setPrimaryArtists)}
                className="ml-2 p-2 bg-blue-500 text-white rounded"
              >
                +
              </button>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Track Artist(s) - Producer</label>
          {producers.map((producer, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                placeholder="Music Producer"
                className="flex-grow px-3 py-2 border rounded"
                value={producer}
                onChange={(e) => {
                  const newProducers = [...producers];
                  newProducers[index] = e.target.value;
                  setProducers(newProducers);
                }}
              />
              <button
                type="button"
                onClick={() => handleAddArtist(setProducers)}
                className="ml-2 p-2 bg-blue-500 text-white rounded"
              >
                +
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <h2 className="text-lg font-medium mb-2">Lyricist</h2>
            {lyricists.map((lyricist, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mb-2">
                <input
                  type="text"
                  placeholder="Lyricist Name"
                  className="px-3 py-2 border rounded"
                  value={lyricist.name}
                  onChange={(e) => {
                    const newLyricists = [...lyricists];
                    newLyricists[index].name = e.target.value;
                    setLyricists(newLyricists);
                  }}
                />
                <input
                  type="text"
                  placeholder="IPI Number"
                  className="px-3 py-2 border rounded"
                  value={lyricist.ipi}
                  onChange={(e) => {
                    const newLyricists = [...lyricists];
                    newLyricists[index].ipi = e.target.value;
                    setLyricists(newLyricists);
                  }}
                />
                <select
                  className="px-3 py-2 border rounded"
                  value={lyricist.iprs}
                  onChange={(e) => {
                    const newLyricists = [...lyricists];
                    newLyricists[index].iprs = e.target.value;
                    setLyricists(newLyricists);
                  }}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select
                  className="px-3 py-2 border rounded"
                  value={lyricist.role}
                  onChange={(e) => {
                    const newLyricists = [...lyricists];
                    newLyricists[index].role = e.target.value;
                    setLyricists(newLyricists);
                  }}
                >
                  <option>Select Role</option>
                  {/* Add options here */}
                </select>
                <button
                  type="button"
                  onClick={() => handleAddPerson(setLyricists)}
                  className="ml-2 p-2 bg-blue-500 text-red-400 rounded"
                >
                  +
                </button>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Composer</h2>
            {composers.map((composer, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 mb-2">
                <input
                  type="text"
                  placeholder="Composer Name"
                  className="px-3 py-2 border rounded"
                  value={composer.name}
                  onChange={(e) => {
                    const newComposers = [...composers];
                    newComposers[index].name = e.target.value;
                    setComposers(newComposers);
                  }}
                />
                <input
                  type="text"
                  placeholder="IPI Number"
                  className="px-3 py-2 border rounded"
                  value={composer.ipi}
                  onChange={(e) => {
                    const newComposers = [...composers];
                    newComposers[index].ipi = e.target.value;
                    setComposers(newComposers);
                  }}
                />
                <select
                  className="px-3 py-2 border rounded"
                  value={composer.iprs}
                  onChange={(e) => {
                    const newComposers = [...composers];
                    newComposers[index].iprs = e.target.value;
                    setComposers(newComposers);
                  }}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select
                  className="px-3 py-2 border rounded"
                  value={composer.role}
                  onChange={(e) => {
                    const newComposers = [...composers];
                    newComposers[index].role = e.target.value;
                    setComposers(newComposers);
                  }}
                >
                  <option>Select Role</option>
                  {/* Add options here */}
                </select>
                <button
                  type="button"
                  onClick={() => handleAddPerson(setComposers)}
                  className="ml-2 p-2 bg-blue-500 text-red-500 rounded"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
