import React, { useEffect } from 'react';
import { Conversation } from '@/components/Dashboard/components/Conversation/Conversation';
import { ActionsList } from '@/components/Dashboard/components/ActionsList/ActionsList';
import { initShortcuts } from '@/services/shortcuts.service';

export default function Dashboard() {
  useEffect(() => {
    initShortcuts().then(() => console.log('Shortcuts initialized'));
  }, []);

  return (
    <>
      <ActionsList />
      <Conversation />
    </>
  );
}
