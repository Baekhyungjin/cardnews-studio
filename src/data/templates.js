// src/data/templates.js
export const templates = [
  // 1. 카페/음식점
  {
    id: 'C01', category: '카페/음식점', title: '신메뉴 출시',
    description: '새로운 커피나 디저트 메뉴를 알릴 때 사용하기 좋은 템플릿입니다.',
    tags: ['신메뉴', '카페', '따뜻한'], colors: ['#ffffff', '#ff9a9e', '#fecfef'],
    previewImage: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 40,
      title: 'NEW MENU', mainText: '봄을 담은\n딸기 라떼', subText: '상큼한 생딸기가 듬뿍 들어간 시즌 한정 메뉴',
      mainFont: "'Nanum Myeongjo', serif", mainSize: 48, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },
  {
    id: 'C02', category: '카페/음식점', title: '오픈 이벤트',
    description: '가게 오픈을 알리고 할인 이벤트를 홍보하기 좋습니다.',
    tags: ['오픈', '이벤트', '할인'], colors: ['#ffecd2', '#fcb69f'],
    previewImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#5c3a21', overlayOpacity: 50,
      title: 'OPEN EVENT', mainText: '그랜드 오픈!\n전 메뉴 20% 할인', subText: '이번 주 주말까지 방문하시는 모든 분들께 혜택을 드립니다.',
      mainFont: "'Black Han Sans', sans-serif", mainSize: 52, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#eeeeee',
    }
  },
  {
    id: 'C03', category: '카페/음식점', title: '영업시간 안내',
    description: '매장의 영업 시간이나 휴무일을 깔끔하게 공지합니다.',
    tags: ['공지', '시간안내'], colors: ['#a18cd1', '#fbc2eb'],
    previewImage: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 60,
      title: 'NOTICE', mainText: '설 연휴\n영업시간 안내', subText: '1.21(토) 정상영업\n1.22(일) ~ 1.23(월) 휴무',
      mainFont: "'Jua', sans-serif", mainSize: 46, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 20, subColor: '#ffffff',
    }
  },

  // 2. 학원/교육
  {
    id: 'E01', category: '학원/교육', title: '수강생 모집',
    description: '새로운 학기나 강의의 수강생을 모집하는 홍보물입니다.',
    tags: ['수강생', '학원', '모집'], colors: ['#84fab0', '#8fd3f4'],
    previewImage: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#1e3c72', overlayOpacity: 60,
      title: 'RECRUITING', mainText: '2027년 상반기\n코딩 캠프 모집', subText: '선착순 30명 마감! 지금 바로 신청하세요.',
      mainFont: "'Do Hyeon', sans-serif", mainSize: 48, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },
  {
    id: 'E02', category: '학원/교육', title: '합격자 발표',
    description: '명예의 전당처럼 합격자를 자랑스럽게 알리는 템플릿입니다.',
    tags: ['합격', '자랑'], colors: ['#fccb90', '#d57eeb'],
    previewImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#5a3f37', overlayOpacity: 60,
      title: 'CONGRATULATIONS', mainText: '명문대 합격!\n자랑스러운 얼굴들', subText: '노력의 결실을 맺은 것을 진심으로 축하합니다.',
      mainFont: "'Nanum Myeongjo', serif", mainSize: 50, mainColor: '#ffffff',
      subFont: "'Gowun Dodum', sans-serif", subSize: 18, subColor: '#dddddd',
    }
  },
  {
    id: 'E03', category: '학원/교육', title: '학원 설명회',
    description: '학부모 대상 입시/진로 설명회 안내용 카드뉴스입니다.',
    tags: ['설명회', '입시'], colors: ['#e0c3fc', '#8ec5fc'],
    previewImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 50,
      title: 'INFO SESSION', mainText: '2028 대학입시\n전략 설명회', subText: '일시: 5월 20일 토요일 오후 2시\n장소: 본관 대강당',
      mainFont: "'Noto Sans KR', sans-serif", mainSize: 42, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  },

  // 3. 쇼핑몰/커머스
  {
    id: 'S01', category: '쇼핑몰/커머스', title: '시즌 오프 세일',
    description: '재고 소진이나 시즌 마감을 위한 파격 세일 이벤트입니다.',
    tags: ['세일', '쇼핑몰', '시즌오프'], colors: ['#f093fb', '#f5576c'],
    previewImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#d32f2f', overlayOpacity: 60,
      title: 'SEASON OFF', mainText: '겨울 상품\n최대 70% 세일', subText: '단 일주일간 진행되는 파격 특가!',
      mainFont: "'Black Han Sans', sans-serif", mainSize: 55, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 20, subColor: '#ffffff',
    }
  },
  {
    id: 'S02', category: '쇼핑몰/커머스', title: '신상품 입고',
    description: '새로 들어온 컬렉션이나 아이템을 소개할 때 사용합니다.',
    tags: ['신상품', '도착'], colors: ['#5ee7df', '#b490ca'],
    previewImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#ffffff', overlayOpacity: 70,
      title: 'NEW ARRIVALS', mainText: '2027 S/S\n스프링 컬렉션', subText: '가장 먼저 만나는 봄의 향기',
      mainFont: "'Nanum Myeongjo', serif", mainSize: 45, mainColor: '#333333',
      subFont: "'Gowun Dodum', sans-serif", subSize: 18, subColor: '#555555',
    }
  },
  {
    id: 'S03', category: '쇼핑몰/커머스', title: '베스트 리뷰',
    description: '고객의 생생한 리뷰를 카드뉴스로 제작하여 신뢰도를 높입니다.',
    tags: ['리뷰', '고객후기'], colors: ['#c3cfe2', '#c3cfe2'],
    previewImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 50,
      title: 'BEST REVIEW', mainText: '"진짜 인생템 만났어요!"', subText: '재구매율 1위 상품입니다.',
      mainFont: "'Jua', sans-serif", mainSize: 40, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  },

  // 4. 뷰티/헤어
  {
    id: 'B01', category: '뷰티/헤어', title: '이달의 아트',
    description: '네일샵이나 미용실에서 추천하는 이번 달 스타일입니다.',
    tags: ['뷰티', '이달의아트'], colors: ['#fdfbfb', '#ebedee'],
    previewImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#ffffff', overlayOpacity: 60,
      title: 'MONTHLY PICK', mainText: '11월 이달의 네일\n69,000원~', subText: '가을 웜톤에 딱 맞는 고급스러운 디자인',
      mainFont: "'Gowun Dodum', sans-serif", mainSize: 42, mainColor: '#333333',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#555555',
    }
  },
  {
    id: 'B02', category: '뷰티/헤어', title: '첫 방문 혜택',
    description: '신규 고객 유치를 위한 첫 방문 시술 할인 안내입니다.',
    tags: ['첫방문', '이벤트'], colors: ['#fad0c4', '#ffd1ff'],
    previewImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 40,
      title: 'WELCOME EVENT', mainText: '첫 방문 고객\n펌/염색 30% 할인', subText: '네이버 예약 시 적용 (기장 추가 없음)',
      mainFont: "'Do Hyeon', sans-serif", mainSize: 48, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  },
  {
    id: 'B03', category: '뷰티/헤어', title: '스타일링 꿀팁',
    description: '전문가가 알려주는 헤어/메이크업 팁 정보성 콘텐츠입니다.',
    tags: ['정보', '꿀팁'], colors: ['#ff9a9e', '#fecfef'],
    previewImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#ff9a9e', overlayOpacity: 60,
      title: 'BEAUTY TIP', mainText: '건조한 계절,\n촉촉한 피부 유지법', subText: '나에게 꼭 맞는 인생 루틴 찾기 프로젝트',
      mainFont: "'Jua', sans-serif", mainSize: 44, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },

  // 5. 부동산/인테리어
  {
    id: 'R01', category: '부동산/인테리어', title: '추천 매물',
    description: '이번 주에 새로 나온 가성비 좋고 예쁜 매물을 소개합니다.',
    tags: ['매물', '부동산', '추천'], colors: ['#a1c4fd', '#c2e9fb'],
    previewImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 50,
      title: 'HOT PROPERTY', mainText: '역세권 신축 투룸\n전세 2억 5천', subText: '풀옵션, 채광 좋은 정남향, 즉시 입주 가능',
      mainFont: "'Do Hyeon', sans-serif", mainSize: 46, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  },
  {
    id: 'R02', category: '부동산/인테리어', title: '인테리어 포트폴리오',
    description: '비포/애프터나 성공적인 리모델링 사례를 보여줍니다.',
    tags: ['인테리어', '리모델링'], colors: ['#cfd9df', '#e2ebf0'],
    previewImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#ffffff', overlayOpacity: 70,
      title: 'PORTFOLIO', mainText: '30평대 아파트\n모던 화이트 인테리어', subText: '공간 활용도를 높인 미니멀 라이프스타일',
      mainFont: "'Nanum Myeongjo', serif", mainSize: 42, mainColor: '#333333',
      subFont: "'Gowun Dodum', sans-serif", subSize: 16, subColor: '#555555',
    }
  },
  {
    id: 'R03', category: '부동산/인테리어', title: '분양 정보',
    description: '청약 일정이나 모델하우스 오픈 소식을 빠르게 전달합니다.',
    tags: ['분양', '청약'], colors: ['#667eea', '#764ba2'],
    previewImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#2b5876', overlayOpacity: 70,
      title: 'NEW SALE', mainText: '한강뷰 자이 아파트\n1순위 청약 접수', subText: '청약일: 11월 15일 | 모델하우스 오픈',
      mainFont: "'Black Han Sans', sans-serif", mainSize: 48, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },

  // 6. 행사/이벤트
  {
    id: 'V01', category: '행사/이벤트', title: '팝업스토어 안내',
    description: '브랜드의 단기 팝업 스토어 오픈 소식을 알립니다.',
    tags: ['팝업', '이벤트'], colors: ['#ff0844', '#ffb199'],
    previewImage: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 60,
      title: 'POP-UP STORE', mainText: '성수동 팝업스토어\nD-DAY 1', subText: '선착순 100분께 한정판 굿즈를 드립니다.',
      mainFont: "'Do Hyeon', sans-serif", mainSize: 52, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },
  {
    id: 'V02', category: '행사/이벤트', title: '원데이 클래스',
    description: '간단히 취미를 배울 수 있는 원데이 클래스 모집 안내입니다.',
    tags: ['클래스', '취미'], colors: ['#96fbc4', '#f9f586'],
    previewImage: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 40,
      title: 'ONE-DAY CLASS', mainText: '플라워 캔들\n만들기 클래스', subText: '초보자도 쉽게 따라하는 나만의 캔들 만들기',
      mainFont: "'Jua', sans-serif", mainSize: 46, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  },
  {
    id: 'V03', category: '행사/이벤트', title: '라이브 방송 공지',
    description: '쇼핑 라이브, 인스타 라이브 등 방송 일정을 알립니다.',
    tags: ['라이브', '방송'], colors: ['#89f7fe', '#66a6ff'],
    previewImage: 'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 60,
      title: 'LIVE STREAM', mainText: '오늘 밤 9시\n라이브 특가 커밍순!', subText: '방송 중 구매 시 전 상품 무료배송 혜택',
      mainFont: "'Black Han Sans', sans-serif", mainSize: 48, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },

  // 7. IT/스타트업
  {
    id: 'I01', category: 'IT/스타트업', title: '업데이트 안내',
    description: '서비스의 새로운 기능이나 대규모 패치를 공지합니다.',
    tags: ['업데이트', '공지'], colors: ['#00c6fb', '#005bea'],
    previewImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#0f2027', overlayOpacity: 70,
      title: 'UPDATE 2.0', mainText: '더욱 새로워진\nAI 기능 추가', subText: '사용자 피드백을 반영하여 성능을 대폭 개선했습니다.',
      mainFont: "'Noto Sans KR', sans-serif", mainSize: 44, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  },
  {
    id: 'I02', category: 'IT/스타트업', title: '채용 공고',
    description: '개발자, 디자이너, 마케터 등 새 팀원을 찾을 때 활용합니다.',
    tags: ['채용', '스타트업'], colors: ['#4facfe', '#00f2fe'],
    previewImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#203a43', overlayOpacity: 60,
      title: 'WE ARE HIRING', mainText: '세상을 바꿀\n개발자 모집', subText: '함께 성장할 수 있는 최고의 동료를 기다립니다.',
      mainFont: "'Do Hyeon', sans-serif", mainSize: 46, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  },
  {
    id: 'I03', category: 'IT/스타트업', title: '서비스 성과 달성',
    description: '100만 유저 돌파 등 서비스 마일스톤 달성을 자축합니다.',
    tags: ['성과', '감사'], colors: ['#f6d365', '#fda085'],
    previewImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 60,
      title: 'MILESTONE', mainText: '누적 가입자\n100만 명 돌파!', subText: '여러분의 사랑 덕분에 큰 성장을 이루었습니다.',
      mainFont: "'Black Han Sans', sans-serif", mainSize: 48, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },

  // 8. 교회/신앙 (확장된 8종)
  {
    id: 'CH01', category: '교회/신앙', title: '주일 예배 안내',
    description: '주일 예배 시간과 장소를 단정하고 경건하게 안내합니다.',
    tags: ['주일예배', '교회'], colors: ['#ffffff', '#f4e2d8'],
    previewImage: import.meta.env.BASE_URL + 'images/church_sunday_worship.png',
    canvasStyles: { backgroundImage: `url(${import.meta.env.BASE_URL}images/church_sunday_worship.png)`, backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 50,
      title: 'SUNDAY WORSHIP', mainText: '주일 예배 안내', subText: '1부 예배: 오전 9시\n2부 예배: 오전 11시\n본당 대예배실',
      mainFont: "'Nanum Myeongjo', serif", mainSize: 52, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 20, subColor: '#ffffff',
    }
  },
  {
    id: 'CH02', category: '교회/신앙', title: '오늘의 말씀',
    description: '성경 구절이나 묵상 내용을 나누기 좋은 템플릿입니다.',
    tags: ['말씀', '묵상', '성경'], colors: ['#e2ebf0', '#cfd9df'],
    previewImage: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 40,
      title: 'BIBLE VERSE', mainText: '여호와는 나의 목자시니\n내게 부족함이 없으리로다', subText: '시편 23편 1절',
      mainFont: "'Gowun Dodum', sans-serif", mainSize: 42, mainColor: '#ffffff',
      subFont: "'Nanum Myeongjo', serif", subSize: 18, subColor: '#f0f0f0',
    }
  },
  {
    id: 'CH03', category: '교회/신앙', title: '수련회 / 행사 안내',
    description: '교회 수련회나 특별한 성회 일정을 홍보합니다.',
    tags: ['수련회', '행사'], colors: ['#a1c4fd', '#c2e9fb'],
    previewImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#2b5876', overlayOpacity: 60,
      title: 'RETREAT', mainText: '2027 청년부\n여름 수련회', subText: '일시: 8.15(수) ~ 8.17(금)\n주제: 세상의 빛과 소금',
      mainFont: "'Do Hyeon', sans-serif", mainSize: 48, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },
  {
    id: 'CH04', category: '교회/신앙', title: '수요/금요 기도회',
    description: '수요 예배나 금요 철야 기도회 시간을 안내합니다.',
    tags: ['기도회', '예배'], colors: ['#4facfe', '#00f2fe'],
    previewImage: import.meta.env.BASE_URL + 'images/church_prayer_meeting.png',
    canvasStyles: { backgroundImage: `url(${import.meta.env.BASE_URL}images/church_prayer_meeting.png)`, backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 70,
      title: 'FRIDAY PRAYER', mainText: '금요 성령 대망회\n은혜의 밤', subText: '매주 금요일 저녁 8시 | 소예배실',
      mainFont: "'Nanum Myeongjo', serif", mainSize: 46, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  },
  {
    id: 'CH05', category: '교회/신앙', title: '성경공부 모집',
    description: '제자훈련이나 성경공부 반을 모집할 때 사용합니다.',
    tags: ['성경공부', '제자훈련'], colors: ['#e0c3fc', '#8ec5fc'],
    previewImage: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#5a3f37', overlayOpacity: 60,
      title: 'BIBLE STUDY', mainText: '상반기 제자훈련\n수강생 모집', subText: '말씀으로 삶을 변화시키는 12주 과정',
      mainFont: "'Do Hyeon', sans-serif", mainSize: 46, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },
  {
    id: 'CH06', category: '교회/신앙', title: '청년부/주일학교',
    description: '교회 내 소그룹이나 부서 모임을 알릴 때 씁니다.',
    tags: ['청년부', '모임'], colors: ['#fad0c4', '#ffd1ff'],
    previewImage: import.meta.env.BASE_URL + 'images/church_youth_sunday_school.png',
    canvasStyles: { backgroundImage: `url(${import.meta.env.BASE_URL}images/church_youth_sunday_school.png)`, backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 50,
      title: 'YOUTH GROUP', mainText: '청년부 토요 모임\n찬양과 교제', subText: '새로운 청년들을 진심으로 환영합니다!',
      mainFont: "'Jua', sans-serif", mainSize: 48, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 18, subColor: '#ffffff',
    }
  },
  {
    id: 'CH07', category: '교회/신앙', title: '새가족 환영',
    description: '교회에 처음 온 새가족을 환영하는 카드뉴스입니다.',
    tags: ['새가족', '환영'], colors: ['#fdfbfb', '#ebedee'],
    previewImage: import.meta.env.BASE_URL + 'images/church_newcomer.png',
    canvasStyles: { backgroundImage: `url(${import.meta.env.BASE_URL}images/church_newcomer.png)`, backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#ffffff', overlayOpacity: 70,
      title: 'WELCOME', mainText: '우리 교회에 오신\n여러분을 환영합니다', subText: '주님의 사랑으로 축복합니다',
      mainFont: "'Gowun Dodum', sans-serif", mainSize: 42, mainColor: '#333333',
      subFont: "'Nanum Myeongjo', serif", subSize: 18, subColor: '#555555',
    }
  },
  {
    id: 'CH08', category: '교회/신앙', title: '온라인 헌금/예배',
    description: '비대면 예배 링크나 온라인 헌금 계좌를 깔끔하게 공지합니다.',
    tags: ['헌금', '온라인예배'], colors: ['#cfd9df', '#e2ebf0'],
    previewImage: import.meta.env.BASE_URL + 'images/church_online_offering.png',
    canvasStyles: { backgroundImage: `url(${import.meta.env.BASE_URL}images/church_online_offering.png)`, backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 60,
      title: 'OFFERING', mainText: '온라인 헌금 안내', subText: '십일조: 농협 123-4567-8901\n감사헌금: 국민 987-654-321',
      mainFont: "'Nanum Myeongjo', serif", mainSize: 46, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#eeeeee',
    }
  },

  // 9. 자율 템플릿
  {
    id: 'Z01', category: '자율 템플릿', title: '빈 캔버스',
    description: '내 사진을 직접 업로드하고 자유롭게 텍스트를 구성하세요.',
    tags: ['커스텀', '업로드'], colors: ['#cccccc', '#888888'],
    previewImage: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80',
    canvasStyles: { backgroundImage: 'url(https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' },
    defaultData: {
      overlayEnabled: true, overlayColor: '#000000', overlayOpacity: 50,
      title: 'CUSTOM', mainText: '자유롭게 적어보세요', subText: '사진을 업로드하여 나만의 카드를 만드세요.',
      mainFont: "'Noto Sans KR', sans-serif", mainSize: 40, mainColor: '#ffffff',
      subFont: "'Noto Sans KR', sans-serif", subSize: 16, subColor: '#ffffff',
    }
  }
];
