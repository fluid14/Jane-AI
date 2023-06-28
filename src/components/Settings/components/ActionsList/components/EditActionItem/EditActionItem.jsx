import React from 'react';
import * as styles from './EditActionItem.module.sass';
import { Input } from '@/components/shared/Input/Input';
import { Button } from '@/components/shared/Button/Button';
import { useForm } from 'react-hook-form';

export const EditActionItem = ({
  title,
  description,
  prompt,
  recordId,
  tags,
  shortcut,
  url,
  callback,
  cancelAction,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      description: data.prompt,
      user_description: data.description,
      category: 'actions',
    };

    delete payload.prompt;
    callback(recordId, payload);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        ref={null}
        label='Title'
        name='title'
        defaultValue={title}
        error={errors.title}
        register={register}
        validationSchema={{ required: 'This field is required' }}
      />
      <Input
        ref={null}
        label='Description'
        name='description'
        textarea
        rows='7'
        defaultValue={description}
        error={errors.description}
        register={register}
        validationSchema={{ required: 'This field is required' }}
      />
      <Input
        ref={null}
        label='Prompt'
        name='prompt'
        textarea
        rows='7'
        defaultValue={prompt}
        error={errors.prompt}
        register={register}
        validationSchema={{ required: 'This field is required' }}
      />
      <Input ref={null} label='Url' name='url' defaultValue={url} register={register} />
      <Input
        ref={null}
        label='Tags'
        name='tags'
        defaultValue={tags}
        error={errors.tags}
        register={register}
        validationSchema={{ required: 'This field is required' }}
      />
      <Input
        ref={null}
        label='Shortcut'
        name='shortcut'
        defaultValue={shortcut}
        error={errors.tags}
        register={register}
      />
      <div className={styles.buttonsWrapper}>
        <Button type='submit'>Save</Button>
        <Button type='button' onClick={cancelAction} danger>
          Cancel
        </Button>
      </div>
    </form>
  );
};
