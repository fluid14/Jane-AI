import React from 'react';
import * as style from './EditActionItem.module.sass';
import { Input } from '@/components/shared/Input/Input';
import { Button } from '@/components/shared/Button/Button';
import useModal from '../../../../../../hooks/useModal.jsx';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { SettingsContext } from '../../../../context/settingsContext.jsx';

export const EditActionItem = ({
  title,
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
  const { updateAction } = useContext(SettingsContext);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      description: data.prompt,
      category: 'actions',
    };

    delete payload.prompt;
    updateAction(recordId, payload);
    callback();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
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
      <div className={style.buttonsWrapper}>
        <Button type='submit'>Save</Button>
        <Button type='button' onClick={cancelAction} danger>
          Cancel
        </Button>
      </div>
    </form>
  );
};
