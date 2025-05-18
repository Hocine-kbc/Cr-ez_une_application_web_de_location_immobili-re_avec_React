import { useState, useRef, useEffect } from 'react';
import '../collapse/collapse.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2>{title}</h2>
        <span className="collapse-icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          height: `${contentHeight}px`,
          overflow: 'hidden',
        }}
      >
        <div className="content-inner">{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
