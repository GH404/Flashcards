import React from 'react';
import FlashcardList from './components/FlashcardList';
import './App.css'

const cards = [
  {
    front: 'what does the "date" command do?',
    back: 'displays current date, time and time zone',
  },
  {
    front: 'what does the "cal" command do?',
    back: 'displays a mini calendar in console with current date highlighted',
  },
  {
    front: 'what does the "df" command do?',
    back: 'displays current amount of free space on disk drives',
  },
  {
    front: 'what does the "free" command do?',
    back: 'displays amount of free RAM memory',
  },
  {
    front: 'what does the "pwd" command do?',
    back: 'displays current working directory',
  },
  {
    front: 'what does the "cd" command do?',
    back: 'changes directory',
  },
  {
    front: 'what does the "ls" command do?',
    back: 'list directory contents',
  },
  {
    front: 'what does the "less" command do?',
    back: 'view file contents in a paged format',
  },
  {
    front: 'what does the "cp" command do?',
    back: 'copy files and directories',
  },
  {
    front: 'what does the "mv" command do?',
    back: 'move/rename files and directories',
  },
  {
    front: 'what does the "mkdir" command do?',
    back: 'create directories',
  },
  {
    front: 'what does the "rm" command do?',
    back: 'remove files and directories',
  },
  {
    front: 'what does the "ln" command do?',
    back: 'create hard and symbolic links',
  },
  {
    front: 'what does the "which" command do?',
    back: 'displays which executable program will be executed',
  },
  {
    front: 'what does the "help" command do?',
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
