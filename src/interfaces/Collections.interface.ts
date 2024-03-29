// Generated by https://quicktype.io

export interface ICollections {
	smart_collections: SmartCollection[];
}

export interface SmartCollection {
	id:                   number;
	handle:               string;
	title:                string;
	updated_at:           string;
	body_html:            null;
	published_at:         string;
	sort_order:           string;
	template_suffix:      null;
	disjunctive:          boolean;
	rules:                Rule[];
	published_scope:      string;
	admin_graphql_api_id: string;
}

export interface Rule {
	column:    string;
	relation:  string;
	condition: string;
}

export interface TransformedCollections {
	id: number;
	title: string;
	handle: string;
}
