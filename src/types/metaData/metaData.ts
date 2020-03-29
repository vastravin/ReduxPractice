export type MetaData = {
  productCategories: MetaProductCategory[] | null;
  productSubCategories: MetaProductSubCategory[] | null;
};

export type MetaProductCategory = {
  id: string;
  category: string;
};

export type MetaProductSubCategory = {
  categoryId: string;
  subCategories: string[];
};
