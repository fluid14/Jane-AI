import React from 'react';
import * as style from './EditActionItem.module.sass';
import { Input } from '@/components/shared/Input/Input';
import { Button } from '@/components/shared/Button/Button';
import useModal from '../../../../../../hooks/useModal.jsx';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { SettingsContext } from '../../../../context/settingsContext.jsx';

export const EditActionItem = () => {
  const { toggle } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addActions } = useContext(SettingsContext);

  const onSubmit = (data) => {
    // addActions(data);
    console.log(data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        ref={null}
        label='Title'
        name='title'
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
        error={errors.prompt}
        register={register}
        validationSchema={{ required: 'This field is required' }}
      />
      <Input ref={null} label='Url' name='url' register={register} />
      <Input
        ref={null}
        label='Tags'
        name='tags'
        error={errors.tags}
        register={register}
        validationSchema={{ required: 'This field is required' }}
      />
      <div className={style.buttonsWrapper}>
        <Button type='submit'>Save</Button>
        <Button type='button' onClick={toggle} danger>
          Cancel
        </Button>
      </div>
    </form>
  );
};
