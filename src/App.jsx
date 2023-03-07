import React from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css'

const cards = [
  {
    front: 'date',
    back: 'displays current date, time and time zone',
  },
  {
    front: 'cal',
    back: 'displays a mini calendar in console with current date highlighted',
  },
  {
    front: 'df',
    back: 'display current amount of free space on disk drives',
  },
  {
    front: 'free',
    back: 'display amount of free RAM memory',
  },
  {
    front: 'pwd',
    back: 'displays current working directory',
  },
  {
    front: 'cd',
    back: 'changes directory',
  },
  {
    front: 'ls',
    back: 'list directory contents',
  },
  {
    front: 'less',
    back: 'view file contents in a paged format',
  },
  {
    front: 'cp',
    back: 'copy files and directories',
  },
  {
    front: 'mv',
    back: 'move/rename files and directories',
  },
  {
    front: 'mkdir',
    back: 'create directoriess',
  },
  {
    front: 'rm',
    back: 'remove files and directories',
  },
  {
    front: 'ln',
    back: 'create hard and symbolic links',
  },
  {
    front: 'which',
    back: 'display which executable program will be executed',
  },
  {
    front: 'help',
    back: 'get help for shell internal commands',
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>LinuxCmds</h1>
      <h2>A Linux commands study deck</h2>
      <h3>Number of Cards: 15</h3>
      <FlashcardList cards={cards} />
    </div>
  );
};

export default App;
