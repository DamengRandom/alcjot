import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Alcjot"
          description="A jot for recording some alcohols I have seen .."
        />
      }
    >
      <p>Alcjot - Aloha</p>
    </Main>
  );
};

export default Index;
