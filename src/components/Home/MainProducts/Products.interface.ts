// Generated by https://quicktype.io

export interface IProducts {
    id:                   number;
    title:                string;
    body_html:            string;
    vendor:               string;
    product_type:         string;
    created_at:           string;
    handle:               string;
    updated_at:           string;
    published_at:         string;
    template_suffix:      null;
    published_scope:      string;
    tags:                 string;
    status:               string;
    admin_graphql_api_id: string;
    variants:             any[];
    options:              any[];
    images:               Image[];
    image:                Image;
}

export interface Image {
    id:                   number;
    alt:                  null;
    position:             number;
    product_id:           number;
    created_at:           string;
    updated_at:           string;
    admin_graphql_api_id: string;
    width:                number;
    height:               number;
    src:                  string;
    variant_ids:          any[];
}
