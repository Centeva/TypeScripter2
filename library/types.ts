
/**
 * The Field Type.
 */
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

/**
 * The base type.
 */
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