"use client";

import React from 'react';
import { Avatar } from './index';
import './custom-avatar.css';

export const AvatarExamples = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
      <h1>🎨 Avatar Component Showcase</h1>

      {/* Basic Default Avatar */}
      <section>
        <h2>Default Variant</h2>
        <Avatar>
          Avatar Content
        </Avatar>
      </section>

      {/* Custom Styles overrides */}
      <section>
        <h2>Custom CSS Override</h2>
        <p>You can supply custom CSS class names to style specific occurrences. (requires external custom-avatar.css or overriding internally)</p>
        <Avatar className="custom-avatar">
          Custom Styled Container for Avatar
        </Avatar>
      </section>
    </div>
  );
};

export default AvatarExamples;
