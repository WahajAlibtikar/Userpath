import React, { useEffect, useState } from 'react';
import { ModernLanding } from './components/ModernLanding';
import { ProposalEstimatorModal } from './components/ProposalEstimatorModal';

export default function App() {
  const [proposalOpen, setProposalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  return (
    <>
      <ModernLanding onOpenProposal={() => setProposalOpen(true)} />
      <ProposalEstimatorModal
        isOpen={proposalOpen}
        onClose={() => setProposalOpen(false)}
      />
    </>
  );
}
