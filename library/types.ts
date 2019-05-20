export interface SchemaFieldModel {
	Id: string;
	Name: string;
	Description: string;
	TypeName: string;
	GenericType: string;
	IsField: boolean;
	IsProperty: boolean;
	IsEnum: boolean;
}

export interface SchemaModel {
	Id: string;
	Name: string;
	TypeName: string;
	GenericType: string;
	QualifiedName: string;
	Fields: Array<SchemaFieldModel>;
	IsClass: boolean;
	Description: string;
}