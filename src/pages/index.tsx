import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Alcjot"
          description="A jot for recording some alcohol I have seen .."
        />
      }
    >
      <p>Aloha Alcjot</p>
    </Main>
  );
};

export default Index;
