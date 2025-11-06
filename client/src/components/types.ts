export type Restaurant = {
  info: Info;
};

export type Info = {
  name: string;
  id: string;
};

export type APIResponse = {
  data: {
    data: {
      cards: RestoCards[];
    };
  };
};

type RestoCards = {
  card: {
    card: {
      gridElements: {
        infoWithStyle: {
          restaurants: Restaurant[];
        };
      };
    };
  };
};
