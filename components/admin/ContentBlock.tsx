'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GripVertical, Trash2, ChevronUp, ChevronDown, Bold, Italic, List, ListOrdered, Heading1, Heading2, Quote, Link as LinkIcon, Pilcrow } from 'lucide-react';

interface ContentBlockProps {
  id: string;
  content: string;
  onUpdate: (id: string, content: string) => void;
  onDelete: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function ContentBlock({
  id,
  content,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: ContentBlockProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [localContent, setLocalContent] = useState(content || '');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setLocalContent(content || '');
  }, [content]);

  const insertFormatting = (tag: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = localContent;
    const selectedText = text.substring(start, end);
    
    console.log('Inserting formatting:', tag, 'Selected text:', selectedText);
    
    let newText = '';
    let defaultText = '';
    
    switch (tag) {
      case 'bold':
        newText = text.substring(0, start) + `<strong>${selectedText || 'bold text'}</strong>` + text.substring(end);
        break;
      case 'italic':
        newText = text.substring(0, start) + `<em>${selectedText || 'italic text'}</em>` + text.substring(end);
        break;
      case 'h1':
        newText = text.substring(0, start) + `\n<h1>${selectedText || 'Heading 1'}</h1>\n` + text.substring(end);
        break;
      case 'h2':
        newText = text.substring(0, start) + `\n<h2>${selectedText || 'Heading 2'}</h2>\n` + text.substring(end);
        break;
      case 'ul':
        newText = text.substring(0, start) + `\n<ul>\n<li>${selectedText || 'List item'}</li>\n</ul>\n` + text.substring(end);
        break;
      case 'ol':
        newText = text.substring(0, start) + `\n<ol>\n<li>${selectedText || 'List item'}</li>\n</ol>\n` + text.substring(end);
        break;
      case 'quote':
        newText = text.substring(0, start) + `\n<blockquote>${selectedText || 'Quote text'}</blockquote>\n` + text.substring(end);
        break;
      case 'link':
        newText = text.substring(0, start) + `<a href="#">${selectedText || 'link text'}</a>` + text.substring(end);
        break;
      case 'paragraph':
        newText = text.substring(0, start) + `\n<p>${selectedText || 'Paragraph text'}</p>\n` + text.substring(end);
        break;
      default:
        newText = text;
    }
    
    console.log('New text:', newText);
    setLocalContent(newText);
    onUpdate(id, newText);
    
    // Restore cursor position after formatting
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + (selectedText?.length || 0) + tag.length + 2; // Approximate position
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setLocalContent(newValue);
    onUpdate(id, newValue);
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg border border-white/10 p-4 group hover:border-[#94cb3d]/30 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <GripVertical className="w-5 h-5 text-gray-500 cursor-move" />
          <span className="text-sm font-medium text-gray-400">Text Block</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onMoveUp(id)}
            disabled={isFirst}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Move Up"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => onMoveDown(id)}
            disabled={isLast}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            title="Move Down"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-white/10 rounded transition-colors"
            title="Delete Block"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Formatting Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-[#0f0f0f] rounded-t-lg border border-white/10 border-b-0 mb-0">
        <button
          type="button"
          onClick={() => insertFormatting('bold')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('italic')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-white/20 mx-1" />
        <button
          type="button"
          onClick={() => insertFormatting('h1')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Heading 1"
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('h2')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('paragraph')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Paragraph"
        >
          <Pilcrow className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-white/20 mx-1" />
        <button
          type="button"
          onClick={() => insertFormatting('ul')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('ol')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-white/20 mx-1" />
        <button
          type="button"
          onClick={() => insertFormatting('quote')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => insertFormatting('link')}
          className="p-2 hover:bg-white/10 rounded transition-colors"
          title="Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <div className="flex-1" />
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 rounded transition-colors"
        >
          {showPreview ? 'Edit' : 'Preview'}
        </button>
      </div>

      {showPreview ? (
        <div className="bg-[#0f0f0f] rounded-b-lg p-4 border border-white/10 border-t-0 min-h-[100px] text-white prose prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: localContent || '<p class="text-gray-500">Preview will appear here...</p>' }} />
        </div>
      ) : (
        <textarea
          ref={textareaRef}
          id={`content-${id}`}
          value={localContent}
          onChange={handleChange}
          placeholder="Write your content here... You can use HTML tags for formatting"
          className="w-full px-4 py-3 bg-[#0f0f0f] border border-white/10 rounded-b-lg focus:outline-none focus:border-[#94cb3d] text-white min-h-[150px] resize-y font-mono text-sm"
        />
      )}
    </div>
  );
}
