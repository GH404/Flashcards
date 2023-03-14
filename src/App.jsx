import React from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css'

const cards = [
  {
    front: 'displays current date, time and time zone',
    back: 'date' ,
  },
  {
    front: 'displays a mini calendar in console with current date highlighted',
    back: 'cal',
  },
  {
    front: 'displays current amount of free space on disk drives',
    back: 'df',
  },
  {
    front: 'displays amount of free RAM memory',
    back: 'free',
  },
  {
    front: 'displays current working directory',
    back: 'pwd',
  },
  {
    front: 'changes directory',
    back: 'cd',
  },
  {
    front: 'list directory contents',
    back: 'ls',
  },
  {
    front: 'view file contents in a paged format',
    back: 'less',
  },
  {
    front: 'copy files and directories',
    back: 'cp',
  },
  {
    front: 'move/rename files and directories',
    back: 'mv',
  },
  {
    front: 'create directories',
    back: 'mkdir',
  },
  {
    front: 'remove files and directories',
    back: 'rm',
  },
  {
    front: 'create hard and symbolic links',
    back: 'ln',
  },
  {
    front: 'displays which executable program will be executed',
    back: 'which',
  },
  {
    front: 'get help for shell internal commands',
    back: 'help',
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
