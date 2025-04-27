import React, { useEffect, useState } from "react";

const TypeWriter = ({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 30,
  pause = 1500,
  className = "", // Menambahkan className sebagai prop
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), pause);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className={className}>
      {texts[textIndex].substring(0, charIndex)}
      <span style={{ color: "white", opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
};

export default TypeWriter;
