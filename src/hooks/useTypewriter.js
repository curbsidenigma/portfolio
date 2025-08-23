import { useState, useEffect } from 'react';

/**
 * A custom React hook for creating a typewriter effect.
 * @param {string[]} words — An array of words to be typed out.
 * @param {object} [options] — Configuration options.
 * @param {number} [options.typingSpeed = 120] — The speed of typing in milliseconds.
 * @param {number} [options.deletingSpeed = 60] — The speed of deleting in milliseconds.
 * @param {number} [options.pause = 1000] — The pause duration in milliseconds before deleting.
 * @returns {string} displayedText — The text to be displayed.
 */
const useTypewriter = (
  words,
  { typingSpeed = 120, deletingSpeed = 60, pause = 1000 } = {}
) => {
  // States to manage the typewriter effect.
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Ensure words array is not empty.
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      // Determine the next character index based on whether it is typing or deleting.
      const updatedCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;

      // Update the displayed text.
      setDisplayedText(currentWord.substring(0, updatedCharIndex));
      setCharIndex(updatedCharIndex);

      // If the word is fully typed, pause and then start deleting.
      if (!isDeleting && updatedCharIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pause);
      }

      // If the word is fully deleted, move to the next word.
      if (isDeleting && updatedCharIndex === 0) {
        setIsDeleting(false);
        // Loop back to the start.
        setWordIndex(prev => (prev + 1) % words.length);
      }
    }, speed);

    // Cleanup function to clear the timeout.
    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  // Return the text that should be rendered.
  return displayedText;
};

export default useTypewriter;
