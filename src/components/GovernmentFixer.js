import React from 'react';

function solutionFor(size) {
  return (size === 'federal') ?
    "This size of problem is outside of scope for us right now, but it'd be cool if you can build a project that does this!" :
    "We're working on it!";
}

export default function GovernmentFixer({ size }) {
  return (
    <div>
      <h1>Government Fixer</h1>
      <h2>Size of Government: {size}</h2>
      <p>{solutionFor(size)}</p>
    </div>
  );
}
