import React, { useState, useContext } from 'react';
import slugify from 'slugify';

import Modal from '../components/Modal';
import FormInput from '../components/FormInput';
import EntitiesContext from '../store/entities';

export default function CreateProject() {
  const { createProject, createError } = useContext(EntitiesContext);

  const [title, setTitle] = useState('');
  const [handle, setHandle] = useState('');
  const formDisabled = !title || !handle;

  function handleSubmit() {
    createProject(title, handle);
  }

  function handleTitleChange(val) {
    const slug = slugify(val, {
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    });
    setHandle(slug);
    setTitle(val);
  }

  function handleHandleChange(val) {
    const slug = slugify(val, {
      replacement: '-',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    });
    setHandle(slug);
  }

  return (
    <Modal
      title="Create project"
      onSubmit={handleSubmit}
      disabled={formDisabled}
    >
      <FormInput
        label="Title"
        value={title}
        onChange={handleTitleChange}
        placeholder="Apple Inc. Website"
      />
      <FormInput
        label="Handle"
        value={handle}
        onChange={handleHandleChange}
        placeholder="apple-inc-website"
        error={createError}
      />
    </Modal>
  );
}
