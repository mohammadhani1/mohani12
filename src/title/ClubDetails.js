import React from 'react';
import { useParams } from 'react-router-dom';

const ClubDetails = () => {
  const { id } = useParams();
  
  // بيانات الأندية كمثال
  const clubsDetails = {
    1: {
      name: 'ريال مدريد',
      description: 'ريال مدريد هو نادي كرة قدم إسباني يقع في مدريد، ويُعد من أنجح الأندية في تاريخ كرة القدم.',
      founded: '1902',
      stadium: 'سانتياغو بيرنابيو',
    },
    2: {
      name: 'برشلونة',
      description: 'برشلونة هو نادي كرة قدم إسباني يُعتبر أحد الأندية الأكثر نجاحًا في العالم.',
      founded: '1899',
      stadium: 'كامب نو',
    },
    3: {
      name: 'مانشستر يونايتد',
      description: 'مانشستر يونايتد هو نادي كرة قدم إنجليزي ذو تاريخ طويل من النجاح في كرة القدم.',
      founded: '1878',
      stadium: 'أولد ترافورد',
    },
  };

  const club = clubsDetails[id];

  return (
    <div>
      <h2>تفاصيل النادي: {club.name}</h2>
      <p><strong>تأسس في:</strong> {club.founded}</p>
      <p><strong>الملعب:</strong> {club.stadium}</p>
      <p><strong>الوصف:</strong> {club.description}</p>
    </div>
  );
};

export default ClubDetails;