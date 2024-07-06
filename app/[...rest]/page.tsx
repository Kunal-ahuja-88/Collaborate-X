// app/[[...rest]]/page.tsx
// app/[[...rest]]/page.tsx
import { CreateOrganization } from '@clerk/nextjs';

const CatchAllPage = () => {
  return (
    <div>
      <CreateOrganization />
    </div>
  );
};

export default CatchAllPage;

