export type Restaurant = {
  info: Info;
};

export type Info = {
  name: string;
  id: string;
  cuisines: string[];
  avgRating: string;
  sla: { slaString: string };
  cloudinaryImageId: string;
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

export type RestaurantMenuType = {
  name: string
}
