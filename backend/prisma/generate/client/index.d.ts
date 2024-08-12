/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Application
 *
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Gener
 *
 */
export type Gener = $Result.DefaultSelection<Prisma.$GenerPayload>
/**
 * Model Developer
 *
 */
export type Developer = $Result.DefaultSelection<Prisma.$DeveloperPayload>
/**
 * Model Publisher
 *
 */
export type Publisher = $Result.DefaultSelection<Prisma.$PublisherPayload>
/**
 * Model File
 *
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>

/**
 * Enums
 */
export namespace $Enums {
	export const Role: {
		USER: 'USER'
		ADMIN: 'ADMIN'
	}

	export type Role = (typeof Role)[keyof typeof Role]
}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
	ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	U = 'log' extends keyof ClientOptions
		? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<ClientOptions['log']>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.js
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
	 */

	constructor(
		optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
	)
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
		) => void
	): void

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>

	/**
	 * Add a middleware
	 * @deprecated since 4.16.0. For new code, prefer client extensions instead.
	 * @see https://pris.ly/d/extensions
	 */
	$use(cb: Prisma.Middleware): void

	/**
	 * Executes a prepared raw query and returns the number of affected rows.
	 * @example
	 * ```
	 * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>

	/**
	 * Executes a raw query and returns the number of affected rows.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<number>

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>

	/**
	 * Performs a raw query and returns the `SELECT` data.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRawUnsafe<T = unknown>(
		query: string,
		...values: any[]
	): Prisma.PrismaPromise<T>

	/**
	 * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
	 * @example
	 * ```
	 * const [george, bob, alice] = await prisma.$transaction([
	 *   prisma.user.create({ data: { name: 'George' } }),
	 *   prisma.user.create({ data: { name: 'Bob' } }),
	 *   prisma.user.create({ data: { name: 'Alice' } }),
	 * ])
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
	 */
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
		) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number
			timeout?: number
			isolationLevel?: Prisma.TransactionIsolationLevel
		}
	): $Utils.JsPromise<R>

	$extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs>

	/**
	 * `prisma.application`: Exposes CRUD operations for the **Application** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Applications
	 * const applications = await prisma.application.findMany()
	 * ```
	 */
	get application(): Prisma.ApplicationDelegate<ExtArgs>

	/**
	 * `prisma.gener`: Exposes CRUD operations for the **Gener** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Geners
	 * const geners = await prisma.gener.findMany()
	 * ```
	 */
	get gener(): Prisma.GenerDelegate<ExtArgs>

	/**
	 * `prisma.developer`: Exposes CRUD operations for the **Developer** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Developers
	 * const developers = await prisma.developer.findMany()
	 * ```
	 */
	get developer(): Prisma.DeveloperDelegate<ExtArgs>

	/**
	 * `prisma.publisher`: Exposes CRUD operations for the **Publisher** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Publishers
	 * const publishers = await prisma.publisher.findMany()
	 * ```
	 */
	get publisher(): Prisma.PublisherDelegate<ExtArgs>

	/**
	 * `prisma.file`: Exposes CRUD operations for the **File** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Files
	 * const files = await prisma.file.findMany()
	 * ```
	 */
	get file(): Prisma.FileDelegate<ExtArgs>
}

export namespace Prisma {
	export import DMMF = runtime.DMMF

	export type PrismaPromise<T> = $Public.PrismaPromise<T>

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
	export import PrismaClientValidationError = runtime.PrismaClientValidationError
	export import NotFoundError = runtime.NotFoundError

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag
	export import empty = runtime.empty
	export import join = runtime.join
	export import raw = runtime.raw
	export import Sql = runtime.Sql

	/**
	 * Decimal.js
	 */
	export import Decimal = runtime.Decimal

	export type DecimalJsLike = runtime.DecimalJsLike

	/**
	 * Metrics
	 */
	export type Metrics = runtime.Metrics
	export type Metric<T> = runtime.Metric<T>
	export type MetricHistogram = runtime.MetricHistogram
	export type MetricHistogramBucket = runtime.MetricHistogramBucket

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs
	export import getExtensionContext = runtime.Extensions.getExtensionContext
	export import Args = $Public.Args
	export import Payload = $Public.Payload
	export import Result = $Public.Result
	export import Exact = $Public.Exact

	/**
	 * Prisma Client JS version: 5.18.0
	 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
	 */
	export type PrismaVersion = {
		client: string
	}

	export const prismaVersion: PrismaVersion

	/**
	 * Utility Types
	 */

	/**
	 * From https://github.com/sindresorhus/type-fest/
	 * Matches a JSON object.
	 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
	 */
	export type JsonObject = { [Key in string]?: JsonValue }

	/**
	 * From https://github.com/sindresorhus/type-fest/
	 * Matches a JSON array.
	 */
	export interface JsonArray extends Array<JsonValue> {}

	/**
	 * From https://github.com/sindresorhus/type-fest/
	 * Matches any valid JSON value.
	 */
	export type JsonValue =
		| string
		| number
		| boolean
		| JsonObject
		| JsonArray
		| null

	/**
	 * Matches a JSON object.
	 * Unlike `JsonObject`, this type allows undefined and read-only properties.
	 */
	export type InputJsonObject = {
		readonly [Key in string]?: InputJsonValue | null
	}

	/**
	 * Matches a JSON array.
	 * Unlike `JsonArray`, readonly arrays are assignable to this type.
	 */
	export interface InputJsonArray
		extends ReadonlyArray<InputJsonValue | null> {}

	/**
	 * Matches any valid value that can be used as an input for operations like
	 * create and update as the value of a JSON field. Unlike `JsonValue`, this
	 * type allows read-only arrays and read-only object properties and disallows
	 * `null` at the top level.
	 *
	 * `null` cannot be used as the value of a JSON field because its meaning
	 * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
	 * `Prisma.DbNull` to clear the JSON value and set the field to the database
	 * NULL value instead.
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
	 */
	export type InputJsonValue =
		| string
		| number
		| boolean
		| InputJsonObject
		| InputJsonArray
		| { toJSON(): unknown }

	/**
	 * Types of the values used to represent different kinds of `null` values when working with JSON fields.
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	namespace NullTypes {
		/**
		 * Type of `Prisma.DbNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class DbNull {
			private DbNull: never
			private constructor()
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never
			private constructor()
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never
			private constructor()
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull

	type SelectAndInclude = {
		select: any
		include: any
	}

	type SelectAndOmit = {
		select: any
		omit: any
	}

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> =
		T extends PromiseLike<infer U> ? U : T

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>
	> = PromiseType<ReturnType<T>>

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P]
	}

	export type Enumerable<T> = T | Array<T>

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
	}[keyof T]

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K
	}

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

	/**
	 * Subset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
	 */
	export type Subset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	}

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	} & (T extends SelectAndInclude
		? 'Please either choose `select` or `include`.'
		: T extends SelectAndOmit
			? 'Please either choose `select` or `omit`.'
			: {})

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never
	} & K

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> =
		T extends Array<any>
			? False
			: T extends Date
				? False
				: T extends Uint8Array
					? False
					: T extends bigint
						? False
						: T extends object
							? True
							: False

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
		}[K]

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

	type _Either<O extends object, K extends Key, strict extends boolean> = {
		1: EitherStrict<O, K>
		0: EitherLoose<O, K>
	}[strict]

	type Either<
		O extends object,
		K extends Key,
		strict extends boolean = 1
	> = O extends unknown ? _Either<O, K, strict> : never

	export type Union = any

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
	} & {}

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (
		U extends unknown ? (k: U) => void : never
	) extends (k: infer I) => void
		? I
		: never

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
	} & {}

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>
			}
		>
	>

	type Key = string | number | symbol
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never
	type AtStrict<O extends object, K extends Key> = O[K & keyof O]
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never
	export type At<
		O extends object,
		K extends Key,
		strict extends boolean = 1
	> = {
		1: AtStrict<O, K>
		0: AtLoose<O, K>
	}[strict]

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
				[K in keyof A]: A[K]
			} & {}

	export type OptionalFlat<O> = {
		[K in keyof O]?: O[K]
	} & {}

	type _Record<K extends keyof any, T> = {
		[P in K]: T
	}

	// cause typescript not to expand types and preserve names
	type NoExpand<T> = T extends unknown ? T : never

	// this type assumes the passed object is entirely optional
	type AtLeast<O extends object, K extends string> = NoExpand<
		O extends unknown
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
			: never
	>

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False

	// /**
	// 1
	// */
	export type True = 1

	/**
  0
  */
	export type False = 0

	export type Not<B extends boolean> = {
		0: 1
		1: 0
	}[B]

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
			? 1
			: 0

	export type Has<U extends Union, U1 extends Union> = Not<
		Extends<Exclude<U1, U>, U1>
	>

	export type Or<B1 extends boolean, B2 extends boolean> = {
		0: {
			0: 0
			1: 1
		}
		1: {
			0: 1
			1: 1
		}
	}[B1][B2]

	export type Keys<U extends Union> = U extends unknown ? keyof U : never

	type Cast<A, B> = A extends B ? A : B

	export const type: unique symbol

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never
			}
		: never

	type FieldPaths<
		T,
		U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
	> = IsObject<T> extends True ? U : T

	type GetHavingFields<T> = {
		[K in keyof T]: Or<
			Or<Extends<'OR', K>, Extends<'AND', K>>,
			Extends<'NOT', K>
		> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<
						UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
					>
				: never
			: {} extends FieldPaths<T[K]>
				? never
				: K
	}[keyof T]

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>

	export const ModelName: {
		User: 'User'
		Application: 'Application'
		Gener: 'Gener'
		Developer: 'Developer'
		Publisher: 'Publisher'
		File: 'File'
	}

	export type ModelName = (typeof ModelName)[keyof typeof ModelName]

	export type Datasources = {
		db?: Datasource
	}

	interface TypeMapCb
		extends $Utils.Fn<
			{ extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
			$Utils.Record<string, any>
		> {
		returns: Prisma.TypeMap<
			this['params']['extArgs'],
			this['params']['clientOptions']
		>
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		ClientOptions = {}
	> = {
		meta: {
			modelProps:
				| 'user'
				| 'application'
				| 'gener'
				| 'developer'
				| 'publisher'
				| 'file'
			txIsolationLevel: Prisma.TransactionIsolationLevel
		}
		model: {
			User: {
				payload: Prisma.$UserPayload<ExtArgs>
				fields: Prisma.UserFieldRefs
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
					}
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
					}
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$UserPayload>
					}
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateUser>
					}
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>
						result: $Utils.Optional<UserGroupByOutputType>[]
					}
					count: {
						args: Prisma.UserCountArgs<ExtArgs>
						result: $Utils.Optional<UserCountAggregateOutputType> | number
					}
				}
			}
			Application: {
				payload: Prisma.$ApplicationPayload<ExtArgs>
				fields: Prisma.ApplicationFieldRefs
				operations: {
					findUnique: {
						args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
					}
					findFirst: {
						args: Prisma.ApplicationFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
					}
					findMany: {
						args: Prisma.ApplicationFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
					}
					create: {
						args: Prisma.ApplicationCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
					}
					createMany: {
						args: Prisma.ApplicationCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
					}
					delete: {
						args: Prisma.ApplicationDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
					}
					update: {
						args: Prisma.ApplicationUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
					}
					deleteMany: {
						args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					upsert: {
						args: Prisma.ApplicationUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
					}
					aggregate: {
						args: Prisma.ApplicationAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateApplication>
					}
					groupBy: {
						args: Prisma.ApplicationGroupByArgs<ExtArgs>
						result: $Utils.Optional<ApplicationGroupByOutputType>[]
					}
					count: {
						args: Prisma.ApplicationCountArgs<ExtArgs>
						result:
							| $Utils.Optional<ApplicationCountAggregateOutputType>
							| number
					}
				}
			}
			Gener: {
				payload: Prisma.$GenerPayload<ExtArgs>
				fields: Prisma.GenerFieldRefs
				operations: {
					findUnique: {
						args: Prisma.GenerFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.GenerFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload>
					}
					findFirst: {
						args: Prisma.GenerFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.GenerFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload>
					}
					findMany: {
						args: Prisma.GenerFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload>[]
					}
					create: {
						args: Prisma.GenerCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload>
					}
					createMany: {
						args: Prisma.GenerCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.GenerCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload>[]
					}
					delete: {
						args: Prisma.GenerDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload>
					}
					update: {
						args: Prisma.GenerUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload>
					}
					deleteMany: {
						args: Prisma.GenerDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.GenerUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					upsert: {
						args: Prisma.GenerUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$GenerPayload>
					}
					aggregate: {
						args: Prisma.GenerAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateGener>
					}
					groupBy: {
						args: Prisma.GenerGroupByArgs<ExtArgs>
						result: $Utils.Optional<GenerGroupByOutputType>[]
					}
					count: {
						args: Prisma.GenerCountArgs<ExtArgs>
						result: $Utils.Optional<GenerCountAggregateOutputType> | number
					}
				}
			}
			Developer: {
				payload: Prisma.$DeveloperPayload<ExtArgs>
				fields: Prisma.DeveloperFieldRefs
				operations: {
					findUnique: {
						args: Prisma.DeveloperFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.DeveloperFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
					}
					findFirst: {
						args: Prisma.DeveloperFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.DeveloperFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
					}
					findMany: {
						args: Prisma.DeveloperFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
					}
					create: {
						args: Prisma.DeveloperCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
					}
					createMany: {
						args: Prisma.DeveloperCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.DeveloperCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>[]
					}
					delete: {
						args: Prisma.DeveloperDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
					}
					update: {
						args: Prisma.DeveloperUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
					}
					deleteMany: {
						args: Prisma.DeveloperDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.DeveloperUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					upsert: {
						args: Prisma.DeveloperUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$DeveloperPayload>
					}
					aggregate: {
						args: Prisma.DeveloperAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateDeveloper>
					}
					groupBy: {
						args: Prisma.DeveloperGroupByArgs<ExtArgs>
						result: $Utils.Optional<DeveloperGroupByOutputType>[]
					}
					count: {
						args: Prisma.DeveloperCountArgs<ExtArgs>
						result: $Utils.Optional<DeveloperCountAggregateOutputType> | number
					}
				}
			}
			Publisher: {
				payload: Prisma.$PublisherPayload<ExtArgs>
				fields: Prisma.PublisherFieldRefs
				operations: {
					findUnique: {
						args: Prisma.PublisherFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.PublisherFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
					}
					findFirst: {
						args: Prisma.PublisherFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.PublisherFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
					}
					findMany: {
						args: Prisma.PublisherFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
					}
					create: {
						args: Prisma.PublisherCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
					}
					createMany: {
						args: Prisma.PublisherCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.PublisherCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
					}
					delete: {
						args: Prisma.PublisherDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
					}
					update: {
						args: Prisma.PublisherUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
					}
					deleteMany: {
						args: Prisma.PublisherDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.PublisherUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					upsert: {
						args: Prisma.PublisherUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
					}
					aggregate: {
						args: Prisma.PublisherAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregatePublisher>
					}
					groupBy: {
						args: Prisma.PublisherGroupByArgs<ExtArgs>
						result: $Utils.Optional<PublisherGroupByOutputType>[]
					}
					count: {
						args: Prisma.PublisherCountArgs<ExtArgs>
						result: $Utils.Optional<PublisherCountAggregateOutputType> | number
					}
				}
			}
			File: {
				payload: Prisma.$FilePayload<ExtArgs>
				fields: Prisma.FileFieldRefs
				operations: {
					findUnique: {
						args: Prisma.FileFindUniqueArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
					}
					findUniqueOrThrow: {
						args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload>
					}
					findFirst: {
						args: Prisma.FileFindFirstArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
					}
					findFirstOrThrow: {
						args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload>
					}
					findMany: {
						args: Prisma.FileFindManyArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
					}
					create: {
						args: Prisma.FileCreateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload>
					}
					createMany: {
						args: Prisma.FileCreateManyArgs<ExtArgs>
						result: BatchPayload
					}
					createManyAndReturn: {
						args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
					}
					delete: {
						args: Prisma.FileDeleteArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload>
					}
					update: {
						args: Prisma.FileUpdateArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload>
					}
					deleteMany: {
						args: Prisma.FileDeleteManyArgs<ExtArgs>
						result: BatchPayload
					}
					updateMany: {
						args: Prisma.FileUpdateManyArgs<ExtArgs>
						result: BatchPayload
					}
					upsert: {
						args: Prisma.FileUpsertArgs<ExtArgs>
						result: $Utils.PayloadToResult<Prisma.$FilePayload>
					}
					aggregate: {
						args: Prisma.FileAggregateArgs<ExtArgs>
						result: $Utils.Optional<AggregateFile>
					}
					groupBy: {
						args: Prisma.FileGroupByArgs<ExtArgs>
						result: $Utils.Optional<FileGroupByOutputType>[]
					}
					count: {
						args: Prisma.FileCountArgs<ExtArgs>
						result: $Utils.Optional<FileCountAggregateOutputType> | number
					}
				}
			}
		}
	} & {
		other: {
			payload: any
			operations: {
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]]
					result: any
				}
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
					result: any
				}
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]]
					result: any
				}
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
					result: any
				}
			}
		}
	}
	export const defineExtension: $Extensions.ExtendsHook<
		'define',
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>
	export type DefaultPrismaClient = PrismaClient
	export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat
		/**
		 * @example
		 * ```
		 * // Defaults to stdout
		 * log: ['query', 'info', 'warn', 'error']
		 *
		 * // Emit as events
		 * log: [
		 *   { emit: 'stdout', level: 'query' },
		 *   { emit: 'stdout', level: 'info' },
		 *   { emit: 'stdout', level: 'warn' }
		 *   { emit: 'stdout', level: 'error' }
		 * ]
		 * ```
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[]
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number
			timeout?: number
			isolationLevel?: Prisma.TransactionIsolationLevel
		}
	}

	/* Types for Logging */
	export type LogLevel = 'info' | 'query' | 'warn' | 'error'
	export type LogDefinition = {
		level: LogLevel
		emit: 'stdout' | 'event'
	}

	export type GetLogType<T extends LogLevel | LogDefinition> =
		T extends LogDefinition
			? T['emit'] extends 'event'
				? T['level']
				: never
			: never
	export type GetEvents<T extends any> =
		T extends Array<LogLevel | LogDefinition>
			?
					| GetLogType<T[0]>
					| GetLogType<T[1]>
					| GetLogType<T[2]>
					| GetLogType<T[3]>
			: never

	export type QueryEvent = {
		timestamp: Date
		query: string
		params: string
		duration: number
		target: string
	}

	export type LogEvent = {
		timestamp: Date
		message: string
		target: string
	}
	/* End Types for Logging */

	export type PrismaAction =
		| 'findUnique'
		| 'findUniqueOrThrow'
		| 'findMany'
		| 'findFirst'
		| 'findFirstOrThrow'
		| 'create'
		| 'createMany'
		| 'createManyAndReturn'
		| 'update'
		| 'updateMany'
		| 'upsert'
		| 'delete'
		| 'deleteMany'
		| 'executeRaw'
		| 'queryRaw'
		| 'aggregate'
		| 'count'
		| 'runCommandRaw'
		| 'findRaw'
		| 'groupBy'

	/**
	 * These options are being passed into the middleware as "params"
	 */
	export type MiddlewareParams = {
		model?: ModelName
		action: PrismaAction
		args: any
		dataPath: string[]
		runInTransaction: boolean
	}

	/**
	 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
	 */
	export type Middleware<T = any> = (
		params: MiddlewareParams,
		next: (params: MiddlewareParams) => $Utils.JsPromise<T>
	) => $Utils.JsPromise<T>

	// tested in getLogLevel.test.ts
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>
	): LogLevel | undefined

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>

	export type Datasource = {
		url?: string
	}

	/**
	 * Count Types
	 */

	/**
	 * Count Type ApplicationCountOutputType
	 */

	export type ApplicationCountOutputType = {
		geners: number
	}

	export type ApplicationCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		geners?: boolean | ApplicationCountOutputTypeCountGenersArgs
	}

	// Custom InputTypes
	/**
	 * ApplicationCountOutputType without action
	 */
	export type ApplicationCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the ApplicationCountOutputType
		 */
		select?: ApplicationCountOutputTypeSelect<ExtArgs> | null
	}

	/**
	 * ApplicationCountOutputType without action
	 */
	export type ApplicationCountOutputTypeCountGenersArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: GenerWhereInput
	}

	/**
	 * Count Type GenerCountOutputType
	 */

	export type GenerCountOutputType = {
		applications: number
	}

	export type GenerCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		applications?: boolean | GenerCountOutputTypeCountApplicationsArgs
	}

	// Custom InputTypes
	/**
	 * GenerCountOutputType without action
	 */
	export type GenerCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the GenerCountOutputType
		 */
		select?: GenerCountOutputTypeSelect<ExtArgs> | null
	}

	/**
	 * GenerCountOutputType without action
	 */
	export type GenerCountOutputTypeCountApplicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: ApplicationWhereInput
	}

	/**
	 * Count Type DeveloperCountOutputType
	 */

	export type DeveloperCountOutputType = {
		applications: number
	}

	export type DeveloperCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		applications?: boolean | DeveloperCountOutputTypeCountApplicationsArgs
	}

	// Custom InputTypes
	/**
	 * DeveloperCountOutputType without action
	 */
	export type DeveloperCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the DeveloperCountOutputType
		 */
		select?: DeveloperCountOutputTypeSelect<ExtArgs> | null
	}

	/**
	 * DeveloperCountOutputType without action
	 */
	export type DeveloperCountOutputTypeCountApplicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: ApplicationWhereInput
	}

	/**
	 * Count Type PublisherCountOutputType
	 */

	export type PublisherCountOutputType = {
		applications: number
	}

	export type PublisherCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		applications?: boolean | PublisherCountOutputTypeCountApplicationsArgs
	}

	// Custom InputTypes
	/**
	 * PublisherCountOutputType without action
	 */
	export type PublisherCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the PublisherCountOutputType
		 */
		select?: PublisherCountOutputTypeSelect<ExtArgs> | null
	}

	/**
	 * PublisherCountOutputType without action
	 */
	export type PublisherCountOutputTypeCountApplicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: ApplicationWhereInput
	}

	/**
	 * Models
	 */

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null
		_avg: UserAvgAggregateOutputType | null
		_sum: UserSumAggregateOutputType | null
		_min: UserMinAggregateOutputType | null
		_max: UserMaxAggregateOutputType | null
	}

	export type UserAvgAggregateOutputType = {
		id: number | null
		age: number | null
	}

	export type UserSumAggregateOutputType = {
		id: number | null
		age: number | null
	}

	export type UserMinAggregateOutputType = {
		id: number | null
		createdAt: Date | null
		updatedAt: Date | null
		email: string | null
		name: string | null
		password: string | null
		age: number | null
		gender: string | null
		dateOfBirth: Date | null
		role: $Enums.Role | null
	}

	export type UserMaxAggregateOutputType = {
		id: number | null
		createdAt: Date | null
		updatedAt: Date | null
		email: string | null
		name: string | null
		password: string | null
		age: number | null
		gender: string | null
		dateOfBirth: Date | null
		role: $Enums.Role | null
	}

	export type UserCountAggregateOutputType = {
		id: number
		createdAt: number
		updatedAt: number
		email: number
		name: number
		password: number
		age: number
		gender: number
		dateOfBirth: number
		role: number
		_all: number
	}

	export type UserAvgAggregateInputType = {
		id?: true
		age?: true
	}

	export type UserSumAggregateInputType = {
		id?: true
		age?: true
	}

	export type UserMinAggregateInputType = {
		id?: true
		createdAt?: true
		updatedAt?: true
		email?: true
		name?: true
		password?: true
		age?: true
		gender?: true
		dateOfBirth?: true
		role?: true
	}

	export type UserMaxAggregateInputType = {
		id?: true
		createdAt?: true
		updatedAt?: true
		email?: true
		name?: true
		password?: true
		age?: true
		gender?: true
		dateOfBirth?: true
		role?: true
	}

	export type UserCountAggregateInputType = {
		id?: true
		createdAt?: true
		updatedAt?: true
		email?: true
		name?: true
		password?: true
		age?: true
		gender?: true
		dateOfBirth?: true
		role?: true
		_all?: true
	}

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: UserAvgAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: UserSumAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType
	}

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>
	}

	export type UserGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: UserWhereInput
		orderBy?:
			| UserOrderByWithAggregationInput
			| UserOrderByWithAggregationInput[]
		by: UserScalarFieldEnum[] | UserScalarFieldEnum
		having?: UserScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: UserCountAggregateInputType | true
		_avg?: UserAvgAggregateInputType
		_sum?: UserSumAggregateInputType
		_min?: UserMinAggregateInputType
		_max?: UserMaxAggregateInputType
	}

	export type UserGroupByOutputType = {
		id: number
		createdAt: Date
		updatedAt: Date
		email: string
		name: string | null
		password: string
		age: number | null
		gender: string | null
		dateOfBirth: Date | null
		role: $Enums.Role
		_count: UserCountAggregateOutputType | null
		_avg: UserAvgAggregateOutputType | null
		_sum: UserSumAggregateOutputType | null
		_min: UserMinAggregateOutputType | null
		_max: UserMaxAggregateOutputType | null
	}

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T['by']> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>
			}
		>
	>

	export type UserSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			email?: boolean
			name?: boolean
			password?: boolean
			age?: boolean
			gender?: boolean
			dateOfBirth?: boolean
			role?: boolean
		},
		ExtArgs['result']['user']
	>

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			email?: boolean
			name?: boolean
			password?: boolean
			age?: boolean
			gender?: boolean
			dateOfBirth?: boolean
			role?: boolean
		},
		ExtArgs['result']['user']
	>

	export type UserSelectScalar = {
		id?: boolean
		createdAt?: boolean
		updatedAt?: boolean
		email?: boolean
		name?: boolean
		password?: boolean
		age?: boolean
		gender?: boolean
		dateOfBirth?: boolean
		role?: boolean
	}

	export type $UserPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		name: 'User'
		objects: {}
		scalars: $Extensions.GetPayloadResult<
			{
				id: number
				createdAt: Date
				updatedAt: Date
				email: string
				name: string | null
				password: string
				age: number | null
				gender: string | null
				dateOfBirth: Date | null
				role: $Enums.Role
			},
			ExtArgs['result']['user']
		>
		composites: {}
	}

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
		$Result.GetResult<Prisma.$UserPayload, S>

	type UserCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
		select?: UserCountAggregateInputType | true
	}

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['User']
			meta: { name: 'User' }
		}
		/**
		 * Find zero or one User that matches the filter.
		 * @param {UserFindUniqueArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null,
			null,
			ExtArgs
		>

		/**
		 * Find one User that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
			never,
			ExtArgs
		>

		/**
		 * Find the first User that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null,
			null,
			ExtArgs
		>

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>,
			never,
			ExtArgs
		>

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Users
		 * const users = await prisma.user.findMany()
		 *
		 * // Get first 10 Users
		 * const users = await prisma.user.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>
		>

		/**
		 * Create a User.
		 * @param {UserCreateArgs} args - Arguments to create a User.
		 * @example
		 * // Create one User
		 * const User = await prisma.user.create({
		 *   data: {
		 *     // ... data to create a User
		 *   }
		 * })
		 *
		 */
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>,
			never,
			ExtArgs
		>

		/**
		 * Create many Users.
		 * @param {UserCreateManyArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Users and returns the data saved in the database.
		 * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>
		>

		/**
		 * Delete a User.
		 * @param {UserDeleteArgs} args - Arguments to delete one User.
		 * @example
		 * // Delete one User
		 * const User = await prisma.user.delete({
		 *   where: {
		 *     // ... filter to delete one User
		 *   }
		 * })
		 *
		 */
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>,
			never,
			ExtArgs
		>

		/**
		 * Update one User.
		 * @param {UserUpdateArgs} args - Arguments to update one User.
		 * @example
		 * // Update one User
		 * const user = await prisma.user.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>,
			never,
			ExtArgs
		>

		/**
		 * Delete zero or more Users.
		 * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
		 * @example
		 * // Delete a few Users
		 * const { count } = await prisma.user.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create or update one User.
		 * @param {UserUpsertArgs} args - Arguments to update or create a User.
		 * @example
		 * // Update or create a User
		 * const user = await prisma.user.upsert({
		 *   create: {
		 *     // ... data to create a User
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the User we want to update
		 *   }
		 * })
		 */
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>,
			never,
			ExtArgs
		>

		/**
		 * Count the number of Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserCountArgs} args - Arguments to filter Users to count.
		 * @example
		 * // Count the number of Users
		 * const count = await prisma.user.count({
		 *   where: {
		 *     // ... the filter for the Users we want to count
		 *   }
		 * })
		 **/
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], UserCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>
		): Prisma.PrismaPromise<GetUserAggregateType<T>>

		/**
		 * Group by User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs['orderBy'] }
				: { orderBy?: UserGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											'Field ',
											P,
											` in "having" needs to be provided in "by"`
										]
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors
			? GetUserGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<'User', 'Int'>
		readonly createdAt: FieldRef<'User', 'DateTime'>
		readonly updatedAt: FieldRef<'User', 'DateTime'>
		readonly email: FieldRef<'User', 'String'>
		readonly name: FieldRef<'User', 'String'>
		readonly password: FieldRef<'User', 'String'>
		readonly age: FieldRef<'User', 'Int'>
		readonly gender: FieldRef<'User', 'String'>
		readonly dateOfBirth: FieldRef<'User', 'DateTime'>
		readonly role: FieldRef<'User', 'Role'>
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
	}

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
	}

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Filter, which Users to fetch.
		 */
		where?: UserWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Users.
		 */
		cursor?: UserWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
	}

	/**
	 * User create
	 */
	export type UserCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>
	}

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * User update
	 */
	export type UserUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput
	}

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
	}

	/**
	 * User delete
	 */
	export type UserDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput
	}

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput
	}

	/**
	 * User without action
	 */
	export type UserDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null
	}

	/**
	 * Model Application
	 */

	export type AggregateApplication = {
		_count: ApplicationCountAggregateOutputType | null
		_avg: ApplicationAvgAggregateOutputType | null
		_sum: ApplicationSumAggregateOutputType | null
		_min: ApplicationMinAggregateOutputType | null
		_max: ApplicationMaxAggregateOutputType | null
	}

	export type ApplicationAvgAggregateOutputType = {
		id: number | null
		steamId: number | null
		rating: number | null
		size: number | null
		developerId: number | null
		publisherId: number | null
	}

	export type ApplicationSumAggregateOutputType = {
		id: number | null
		steamId: number | null
		rating: number | null
		size: number | null
		developerId: number | null
		publisherId: number | null
	}

	export type ApplicationMinAggregateOutputType = {
		id: number | null
		createdAt: Date | null
		updatedAt: Date | null
		releaseDate: Date | null
		name: string | null
		description: string | null
		steamId: number | null
		rating: number | null
		size: number | null
		isModding: boolean | null
		developerId: number | null
		publisherId: number | null
		minReqCpu: string | null
		minReqGpu: string | null
		minReqRam: string | null
		minReqOs: string | null
		minReqSize: string | null
		minReqAdd: string | null
		recReqCpu: string | null
		recReqGpu: string | null
		recReqRam: string | null
		recReqOs: string | null
		recReqSize: string | null
		recReqAdd: string | null
	}

	export type ApplicationMaxAggregateOutputType = {
		id: number | null
		createdAt: Date | null
		updatedAt: Date | null
		releaseDate: Date | null
		name: string | null
		description: string | null
		steamId: number | null
		rating: number | null
		size: number | null
		isModding: boolean | null
		developerId: number | null
		publisherId: number | null
		minReqCpu: string | null
		minReqGpu: string | null
		minReqRam: string | null
		minReqOs: string | null
		minReqSize: string | null
		minReqAdd: string | null
		recReqCpu: string | null
		recReqGpu: string | null
		recReqRam: string | null
		recReqOs: string | null
		recReqSize: string | null
		recReqAdd: string | null
	}

	export type ApplicationCountAggregateOutputType = {
		id: number
		createdAt: number
		updatedAt: number
		releaseDate: number
		name: number
		description: number
		steamId: number
		rating: number
		size: number
		isModding: number
		developerId: number
		publisherId: number
		minReqCpu: number
		minReqGpu: number
		minReqRam: number
		minReqOs: number
		minReqSize: number
		minReqAdd: number
		recReqCpu: number
		recReqGpu: number
		recReqRam: number
		recReqOs: number
		recReqSize: number
		recReqAdd: number
		_all: number
	}

	export type ApplicationAvgAggregateInputType = {
		id?: true
		steamId?: true
		rating?: true
		size?: true
		developerId?: true
		publisherId?: true
	}

	export type ApplicationSumAggregateInputType = {
		id?: true
		steamId?: true
		rating?: true
		size?: true
		developerId?: true
		publisherId?: true
	}

	export type ApplicationMinAggregateInputType = {
		id?: true
		createdAt?: true
		updatedAt?: true
		releaseDate?: true
		name?: true
		description?: true
		steamId?: true
		rating?: true
		size?: true
		isModding?: true
		developerId?: true
		publisherId?: true
		minReqCpu?: true
		minReqGpu?: true
		minReqRam?: true
		minReqOs?: true
		minReqSize?: true
		minReqAdd?: true
		recReqCpu?: true
		recReqGpu?: true
		recReqRam?: true
		recReqOs?: true
		recReqSize?: true
		recReqAdd?: true
	}

	export type ApplicationMaxAggregateInputType = {
		id?: true
		createdAt?: true
		updatedAt?: true
		releaseDate?: true
		name?: true
		description?: true
		steamId?: true
		rating?: true
		size?: true
		isModding?: true
		developerId?: true
		publisherId?: true
		minReqCpu?: true
		minReqGpu?: true
		minReqRam?: true
		minReqOs?: true
		minReqSize?: true
		minReqAdd?: true
		recReqCpu?: true
		recReqGpu?: true
		recReqRam?: true
		recReqOs?: true
		recReqSize?: true
		recReqAdd?: true
	}

	export type ApplicationCountAggregateInputType = {
		id?: true
		createdAt?: true
		updatedAt?: true
		releaseDate?: true
		name?: true
		description?: true
		steamId?: true
		rating?: true
		size?: true
		isModding?: true
		developerId?: true
		publisherId?: true
		minReqCpu?: true
		minReqGpu?: true
		minReqRam?: true
		minReqOs?: true
		minReqSize?: true
		minReqAdd?: true
		recReqCpu?: true
		recReqGpu?: true
		recReqRam?: true
		recReqOs?: true
		recReqSize?: true
		recReqAdd?: true
		_all?: true
	}

	export type ApplicationAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Application to aggregate.
		 */
		where?: ApplicationWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Applications to fetch.
		 */
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: ApplicationWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Applications from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Applications.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Applications
		 **/
		_count?: true | ApplicationCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ApplicationAvgAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ApplicationSumAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ApplicationMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ApplicationMaxAggregateInputType
	}

	export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> =
		{
			[P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
				? T[P] extends true
					? number
					: GetScalarType<T[P], AggregateApplication[P]>
				: GetScalarType<T[P], AggregateApplication[P]>
		}

	export type ApplicationGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: ApplicationWhereInput
		orderBy?:
			| ApplicationOrderByWithAggregationInput
			| ApplicationOrderByWithAggregationInput[]
		by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
		having?: ApplicationScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: ApplicationCountAggregateInputType | true
		_avg?: ApplicationAvgAggregateInputType
		_sum?: ApplicationSumAggregateInputType
		_min?: ApplicationMinAggregateInputType
		_max?: ApplicationMaxAggregateInputType
	}

	export type ApplicationGroupByOutputType = {
		id: number
		createdAt: Date
		updatedAt: Date
		releaseDate: Date
		name: string
		description: string
		steamId: number | null
		rating: number
		size: number | null
		isModding: boolean
		developerId: number | null
		publisherId: number | null
		minReqCpu: string | null
		minReqGpu: string | null
		minReqRam: string | null
		minReqOs: string | null
		minReqSize: string | null
		minReqAdd: string | null
		recReqCpu: string | null
		recReqGpu: string | null
		recReqRam: string | null
		recReqOs: string | null
		recReqSize: string | null
		recReqAdd: string | null
		_count: ApplicationCountAggregateOutputType | null
		_avg: ApplicationAvgAggregateOutputType | null
		_sum: ApplicationSumAggregateOutputType | null
		_min: ApplicationMinAggregateOutputType | null
		_max: ApplicationMaxAggregateOutputType | null
	}

	type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ApplicationGroupByOutputType, T['by']> & {
					[P in keyof T &
						keyof ApplicationGroupByOutputType]: P extends '_count'
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], ApplicationGroupByOutputType[P]>
						: GetScalarType<T[P], ApplicationGroupByOutputType[P]>
				}
			>
		>

	export type ApplicationSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			releaseDate?: boolean
			name?: boolean
			description?: boolean
			steamId?: boolean
			rating?: boolean
			size?: boolean
			isModding?: boolean
			developerId?: boolean
			publisherId?: boolean
			minReqCpu?: boolean
			minReqGpu?: boolean
			minReqRam?: boolean
			minReqOs?: boolean
			minReqSize?: boolean
			minReqAdd?: boolean
			recReqCpu?: boolean
			recReqGpu?: boolean
			recReqRam?: boolean
			recReqOs?: boolean
			recReqSize?: boolean
			recReqAdd?: boolean
			geners?: boolean | Application$genersArgs<ExtArgs>
			developer?: boolean | Application$developerArgs<ExtArgs>
			publisher?: boolean | Application$publisherArgs<ExtArgs>
			_count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
		},
		ExtArgs['result']['application']
	>

	export type ApplicationSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			createdAt?: boolean
			updatedAt?: boolean
			releaseDate?: boolean
			name?: boolean
			description?: boolean
			steamId?: boolean
			rating?: boolean
			size?: boolean
			isModding?: boolean
			developerId?: boolean
			publisherId?: boolean
			minReqCpu?: boolean
			minReqGpu?: boolean
			minReqRam?: boolean
			minReqOs?: boolean
			minReqSize?: boolean
			minReqAdd?: boolean
			recReqCpu?: boolean
			recReqGpu?: boolean
			recReqRam?: boolean
			recReqOs?: boolean
			recReqSize?: boolean
			recReqAdd?: boolean
			developer?: boolean | Application$developerArgs<ExtArgs>
			publisher?: boolean | Application$publisherArgs<ExtArgs>
		},
		ExtArgs['result']['application']
	>

	export type ApplicationSelectScalar = {
		id?: boolean
		createdAt?: boolean
		updatedAt?: boolean
		releaseDate?: boolean
		name?: boolean
		description?: boolean
		steamId?: boolean
		rating?: boolean
		size?: boolean
		isModding?: boolean
		developerId?: boolean
		publisherId?: boolean
		minReqCpu?: boolean
		minReqGpu?: boolean
		minReqRam?: boolean
		minReqOs?: boolean
		minReqSize?: boolean
		minReqAdd?: boolean
		recReqCpu?: boolean
		recReqGpu?: boolean
		recReqRam?: boolean
		recReqOs?: boolean
		recReqSize?: boolean
		recReqAdd?: boolean
	}

	export type ApplicationInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		geners?: boolean | Application$genersArgs<ExtArgs>
		developer?: boolean | Application$developerArgs<ExtArgs>
		publisher?: boolean | Application$publisherArgs<ExtArgs>
		_count?: boolean | ApplicationCountOutputTypeDefaultArgs<ExtArgs>
	}
	export type ApplicationIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		developer?: boolean | Application$developerArgs<ExtArgs>
		publisher?: boolean | Application$publisherArgs<ExtArgs>
	}

	export type $ApplicationPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		name: 'Application'
		objects: {
			geners: Prisma.$GenerPayload<ExtArgs>[]
			developer: Prisma.$DeveloperPayload<ExtArgs> | null
			publisher: Prisma.$PublisherPayload<ExtArgs> | null
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: number
				createdAt: Date
				updatedAt: Date
				releaseDate: Date
				name: string
				description: string
				steamId: number | null
				rating: number
				size: number | null
				isModding: boolean
				developerId: number | null
				publisherId: number | null
				minReqCpu: string | null
				minReqGpu: string | null
				minReqRam: string | null
				minReqOs: string | null
				minReqSize: string | null
				minReqAdd: string | null
				recReqCpu: string | null
				recReqGpu: string | null
				recReqRam: string | null
				recReqOs: string | null
				recReqSize: string | null
				recReqAdd: string | null
			},
			ExtArgs['result']['application']
		>
		composites: {}
	}

	type ApplicationGetPayload<
		S extends boolean | null | undefined | ApplicationDefaultArgs
	> = $Result.GetResult<Prisma.$ApplicationPayload, S>

	type ApplicationCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
		select?: ApplicationCountAggregateInputType | true
	}

	export interface ApplicationDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Application']
			meta: { name: 'Application' }
		}
		/**
		 * Find zero or one Application that matches the filter.
		 * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
		 * @example
		 * // Get one Application
		 * const application = await prisma.application.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends ApplicationFindUniqueArgs>(
			args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				'findUnique'
			> | null,
			null,
			ExtArgs
		>

		/**
		 * Find one Application that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
		 * @example
		 * // Get one Application
		 * const application = await prisma.application.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(
			args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				'findUniqueOrThrow'
			>,
			never,
			ExtArgs
		>

		/**
		 * Find the first Application that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
		 * @example
		 * // Get one Application
		 * const application = await prisma.application.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends ApplicationFindFirstArgs>(
			args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				'findFirst'
			> | null,
			null,
			ExtArgs
		>

		/**
		 * Find the first Application that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
		 * @example
		 * // Get one Application
		 * const application = await prisma.application.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(
			args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__ApplicationClient<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				'findFirstOrThrow'
			>,
			never,
			ExtArgs
		>

		/**
		 * Find zero or more Applications that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Applications
		 * const applications = await prisma.application.findMany()
		 *
		 * // Get first 10 Applications
		 * const applications = await prisma.application.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends ApplicationFindManyArgs>(
			args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'>
		>

		/**
		 * Create a Application.
		 * @param {ApplicationCreateArgs} args - Arguments to create a Application.
		 * @example
		 * // Create one Application
		 * const Application = await prisma.application.create({
		 *   data: {
		 *     // ... data to create a Application
		 *   }
		 * })
		 *
		 */
		create<T extends ApplicationCreateArgs>(
			args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>
		): Prisma__ApplicationClient<
			$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'create'>,
			never,
			ExtArgs
		>

		/**
		 * Create many Applications.
		 * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
		 * @example
		 * // Create many Applications
		 * const application = await prisma.application.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends ApplicationCreateManyArgs>(
			args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Applications and returns the data saved in the database.
		 * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
		 * @example
		 * // Create many Applications
		 * const application = await prisma.application.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Applications and only return the `id`
		 * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(
			args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$ApplicationPayload<ExtArgs>,
				T,
				'createManyAndReturn'
			>
		>

		/**
		 * Delete a Application.
		 * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
		 * @example
		 * // Delete one Application
		 * const Application = await prisma.application.delete({
		 *   where: {
		 *     // ... filter to delete one Application
		 *   }
		 * })
		 *
		 */
		delete<T extends ApplicationDeleteArgs>(
			args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>
		): Prisma__ApplicationClient<
			$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'delete'>,
			never,
			ExtArgs
		>

		/**
		 * Update one Application.
		 * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
		 * @example
		 * // Update one Application
		 * const application = await prisma.application.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends ApplicationUpdateArgs>(
			args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>
		): Prisma__ApplicationClient<
			$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'update'>,
			never,
			ExtArgs
		>

		/**
		 * Delete zero or more Applications.
		 * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
		 * @example
		 * // Delete a few Applications
		 * const { count } = await prisma.application.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends ApplicationDeleteManyArgs>(
			args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Applications.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Applications
		 * const application = await prisma.application.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends ApplicationUpdateManyArgs>(
			args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create or update one Application.
		 * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
		 * @example
		 * // Update or create a Application
		 * const application = await prisma.application.upsert({
		 *   create: {
		 *     // ... data to create a Application
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Application we want to update
		 *   }
		 * })
		 */
		upsert<T extends ApplicationUpsertArgs>(
			args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>
		): Prisma__ApplicationClient<
			$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'upsert'>,
			never,
			ExtArgs
		>

		/**
		 * Count the number of Applications.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
		 * @example
		 * // Count the number of Applications
		 * const count = await prisma.application.count({
		 *   where: {
		 *     // ... the filter for the Applications we want to count
		 *   }
		 * })
		 **/
		count<T extends ApplicationCountArgs>(
			args?: Subset<T, ApplicationCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], ApplicationCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a Application.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends ApplicationAggregateArgs>(
			args: Subset<T, ApplicationAggregateArgs>
		): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

		/**
		 * Group by Application.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ApplicationGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends ApplicationGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: ApplicationGroupByArgs['orderBy'] }
				: { orderBy?: ApplicationGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											'Field ',
											P,
											` in "having" needs to be provided in "by"`
										]
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
		>(
			args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetApplicationGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Application model
		 */
		readonly fields: ApplicationFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Application.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__ApplicationClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		geners<T extends Application$genersArgs<ExtArgs> = {}>(
			args?: Subset<T, Application$genersArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'findMany'> | Null
		>
		developer<T extends Application$developerArgs<ExtArgs> = {}>(
			args?: Subset<T, Application$developerArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<
				Prisma.$DeveloperPayload<ExtArgs>,
				T,
				'findUniqueOrThrow'
			> | null,
			null,
			ExtArgs
		>
		publisher<T extends Application$publisherArgs<ExtArgs> = {}>(
			args?: Subset<T, Application$publisherArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<
				Prisma.$PublisherPayload<ExtArgs>,
				T,
				'findUniqueOrThrow'
			> | null,
			null,
			ExtArgs
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Application model
	 */
	interface ApplicationFieldRefs {
		readonly id: FieldRef<'Application', 'Int'>
		readonly createdAt: FieldRef<'Application', 'DateTime'>
		readonly updatedAt: FieldRef<'Application', 'DateTime'>
		readonly releaseDate: FieldRef<'Application', 'DateTime'>
		readonly name: FieldRef<'Application', 'String'>
		readonly description: FieldRef<'Application', 'String'>
		readonly steamId: FieldRef<'Application', 'Int'>
		readonly rating: FieldRef<'Application', 'Int'>
		readonly size: FieldRef<'Application', 'Int'>
		readonly isModding: FieldRef<'Application', 'Boolean'>
		readonly developerId: FieldRef<'Application', 'Int'>
		readonly publisherId: FieldRef<'Application', 'Int'>
		readonly minReqCpu: FieldRef<'Application', 'String'>
		readonly minReqGpu: FieldRef<'Application', 'String'>
		readonly minReqRam: FieldRef<'Application', 'String'>
		readonly minReqOs: FieldRef<'Application', 'String'>
		readonly minReqSize: FieldRef<'Application', 'String'>
		readonly minReqAdd: FieldRef<'Application', 'String'>
		readonly recReqCpu: FieldRef<'Application', 'String'>
		readonly recReqGpu: FieldRef<'Application', 'String'>
		readonly recReqRam: FieldRef<'Application', 'String'>
		readonly recReqOs: FieldRef<'Application', 'String'>
		readonly recReqSize: FieldRef<'Application', 'String'>
		readonly recReqAdd: FieldRef<'Application', 'String'>
	}

	// Custom InputTypes
	/**
	 * Application findUnique
	 */
	export type ApplicationFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * Filter, which Application to fetch.
		 */
		where: ApplicationWhereUniqueInput
	}

	/**
	 * Application findUniqueOrThrow
	 */
	export type ApplicationFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * Filter, which Application to fetch.
		 */
		where: ApplicationWhereUniqueInput
	}

	/**
	 * Application findFirst
	 */
	export type ApplicationFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * Filter, which Application to fetch.
		 */
		where?: ApplicationWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Applications to fetch.
		 */
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Applications.
		 */
		cursor?: ApplicationWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Applications from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Applications.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Applications.
		 */
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
	}

	/**
	 * Application findFirstOrThrow
	 */
	export type ApplicationFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * Filter, which Application to fetch.
		 */
		where?: ApplicationWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Applications to fetch.
		 */
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Applications.
		 */
		cursor?: ApplicationWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Applications from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Applications.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Applications.
		 */
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
	}

	/**
	 * Application findMany
	 */
	export type ApplicationFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * Filter, which Applications to fetch.
		 */
		where?: ApplicationWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Applications to fetch.
		 */
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Applications.
		 */
		cursor?: ApplicationWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Applications from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Applications.
		 */
		skip?: number
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
	}

	/**
	 * Application create
	 */
	export type ApplicationCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * The data needed to create a Application.
		 */
		data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
	}

	/**
	 * Application createMany
	 */
	export type ApplicationCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to create many Applications.
		 */
		data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Application createManyAndReturn
	 */
	export type ApplicationCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * The data used to create many Applications.
		 */
		data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
		skipDuplicates?: boolean
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
	}

	/**
	 * Application update
	 */
	export type ApplicationUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * The data needed to update a Application.
		 */
		data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
		/**
		 * Choose, which Application to update.
		 */
		where: ApplicationWhereUniqueInput
	}

	/**
	 * Application updateMany
	 */
	export type ApplicationUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to update Applications.
		 */
		data: XOR<
			ApplicationUpdateManyMutationInput,
			ApplicationUncheckedUpdateManyInput
		>
		/**
		 * Filter which Applications to update
		 */
		where?: ApplicationWhereInput
	}

	/**
	 * Application upsert
	 */
	export type ApplicationUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * The filter to search for the Application to update in case it exists.
		 */
		where: ApplicationWhereUniqueInput
		/**
		 * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
		 */
		create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
		/**
		 * In case the Application was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
	}

	/**
	 * Application delete
	 */
	export type ApplicationDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		/**
		 * Filter which Application to delete.
		 */
		where: ApplicationWhereUniqueInput
	}

	/**
	 * Application deleteMany
	 */
	export type ApplicationDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Applications to delete
		 */
		where?: ApplicationWhereInput
	}

	/**
	 * Application.geners
	 */
	export type Application$genersArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		where?: GenerWhereInput
		orderBy?: GenerOrderByWithRelationInput | GenerOrderByWithRelationInput[]
		cursor?: GenerWhereUniqueInput
		take?: number
		skip?: number
		distinct?: GenerScalarFieldEnum | GenerScalarFieldEnum[]
	}

	/**
	 * Application.developer
	 */
	export type Application$developerArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		where?: DeveloperWhereInput
	}

	/**
	 * Application.publisher
	 */
	export type Application$publisherArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		where?: PublisherWhereInput
	}

	/**
	 * Application without action
	 */
	export type ApplicationDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
	}

	/**
	 * Model Gener
	 */

	export type AggregateGener = {
		_count: GenerCountAggregateOutputType | null
		_avg: GenerAvgAggregateOutputType | null
		_sum: GenerSumAggregateOutputType | null
		_min: GenerMinAggregateOutputType | null
		_max: GenerMaxAggregateOutputType | null
	}

	export type GenerAvgAggregateOutputType = {
		id: number | null
	}

	export type GenerSumAggregateOutputType = {
		id: number | null
	}

	export type GenerMinAggregateOutputType = {
		id: number | null
		name: string | null
		slug: string | null
	}

	export type GenerMaxAggregateOutputType = {
		id: number | null
		name: string | null
		slug: string | null
	}

	export type GenerCountAggregateOutputType = {
		id: number
		name: number
		slug: number
		_all: number
	}

	export type GenerAvgAggregateInputType = {
		id?: true
	}

	export type GenerSumAggregateInputType = {
		id?: true
	}

	export type GenerMinAggregateInputType = {
		id?: true
		name?: true
		slug?: true
	}

	export type GenerMaxAggregateInputType = {
		id?: true
		name?: true
		slug?: true
	}

	export type GenerCountAggregateInputType = {
		id?: true
		name?: true
		slug?: true
		_all?: true
	}

	export type GenerAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Gener to aggregate.
		 */
		where?: GenerWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Geners to fetch.
		 */
		orderBy?: GenerOrderByWithRelationInput | GenerOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: GenerWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Geners from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Geners.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Geners
		 **/
		_count?: true | GenerCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: GenerAvgAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: GenerSumAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: GenerMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: GenerMaxAggregateInputType
	}

	export type GetGenerAggregateType<T extends GenerAggregateArgs> = {
		[P in keyof T & keyof AggregateGener]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateGener[P]>
			: GetScalarType<T[P], AggregateGener[P]>
	}

	export type GenerGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: GenerWhereInput
		orderBy?:
			| GenerOrderByWithAggregationInput
			| GenerOrderByWithAggregationInput[]
		by: GenerScalarFieldEnum[] | GenerScalarFieldEnum
		having?: GenerScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: GenerCountAggregateInputType | true
		_avg?: GenerAvgAggregateInputType
		_sum?: GenerSumAggregateInputType
		_min?: GenerMinAggregateInputType
		_max?: GenerMaxAggregateInputType
	}

	export type GenerGroupByOutputType = {
		id: number
		name: string
		slug: string
		_count: GenerCountAggregateOutputType | null
		_avg: GenerAvgAggregateOutputType | null
		_sum: GenerSumAggregateOutputType | null
		_min: GenerMinAggregateOutputType | null
		_max: GenerMaxAggregateOutputType | null
	}

	type GetGenerGroupByPayload<T extends GenerGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<GenerGroupByOutputType, T['by']> & {
					[P in keyof T & keyof GenerGroupByOutputType]: P extends '_count'
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], GenerGroupByOutputType[P]>
						: GetScalarType<T[P], GenerGroupByOutputType[P]>
				}
			>
		>

	export type GenerSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
			slug?: boolean
			applications?: boolean | Gener$applicationsArgs<ExtArgs>
			_count?: boolean | GenerCountOutputTypeDefaultArgs<ExtArgs>
		},
		ExtArgs['result']['gener']
	>

	export type GenerSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
			slug?: boolean
		},
		ExtArgs['result']['gener']
	>

	export type GenerSelectScalar = {
		id?: boolean
		name?: boolean
		slug?: boolean
	}

	export type GenerInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		applications?: boolean | Gener$applicationsArgs<ExtArgs>
		_count?: boolean | GenerCountOutputTypeDefaultArgs<ExtArgs>
	}
	export type GenerIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {}

	export type $GenerPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		name: 'Gener'
		objects: {
			applications: Prisma.$ApplicationPayload<ExtArgs>[]
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: number
				name: string
				slug: string
			},
			ExtArgs['result']['gener']
		>
		composites: {}
	}

	type GenerGetPayload<
		S extends boolean | null | undefined | GenerDefaultArgs
	> = $Result.GetResult<Prisma.$GenerPayload, S>

	type GenerCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = Omit<GenerFindManyArgs, 'select' | 'include' | 'distinct'> & {
		select?: GenerCountAggregateInputType | true
	}

	export interface GenerDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Gener']
			meta: { name: 'Gener' }
		}
		/**
		 * Find zero or one Gener that matches the filter.
		 * @param {GenerFindUniqueArgs} args - Arguments to find a Gener
		 * @example
		 * // Get one Gener
		 * const gener = await prisma.gener.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends GenerFindUniqueArgs>(
			args: SelectSubset<T, GenerFindUniqueArgs<ExtArgs>>
		): Prisma__GenerClient<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'findUnique'> | null,
			null,
			ExtArgs
		>

		/**
		 * Find one Gener that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {GenerFindUniqueOrThrowArgs} args - Arguments to find a Gener
		 * @example
		 * // Get one Gener
		 * const gener = await prisma.gener.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends GenerFindUniqueOrThrowArgs>(
			args: SelectSubset<T, GenerFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__GenerClient<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
			never,
			ExtArgs
		>

		/**
		 * Find the first Gener that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GenerFindFirstArgs} args - Arguments to find a Gener
		 * @example
		 * // Get one Gener
		 * const gener = await prisma.gener.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends GenerFindFirstArgs>(
			args?: SelectSubset<T, GenerFindFirstArgs<ExtArgs>>
		): Prisma__GenerClient<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'findFirst'> | null,
			null,
			ExtArgs
		>

		/**
		 * Find the first Gener that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GenerFindFirstOrThrowArgs} args - Arguments to find a Gener
		 * @example
		 * // Get one Gener
		 * const gener = await prisma.gener.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends GenerFindFirstOrThrowArgs>(
			args?: SelectSubset<T, GenerFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__GenerClient<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
			never,
			ExtArgs
		>

		/**
		 * Find zero or more Geners that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GenerFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Geners
		 * const geners = await prisma.gener.findMany()
		 *
		 * // Get first 10 Geners
		 * const geners = await prisma.gener.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const generWithIdOnly = await prisma.gener.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends GenerFindManyArgs>(
			args?: SelectSubset<T, GenerFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'findMany'>
		>

		/**
		 * Create a Gener.
		 * @param {GenerCreateArgs} args - Arguments to create a Gener.
		 * @example
		 * // Create one Gener
		 * const Gener = await prisma.gener.create({
		 *   data: {
		 *     // ... data to create a Gener
		 *   }
		 * })
		 *
		 */
		create<T extends GenerCreateArgs>(
			args: SelectSubset<T, GenerCreateArgs<ExtArgs>>
		): Prisma__GenerClient<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'create'>,
			never,
			ExtArgs
		>

		/**
		 * Create many Geners.
		 * @param {GenerCreateManyArgs} args - Arguments to create many Geners.
		 * @example
		 * // Create many Geners
		 * const gener = await prisma.gener.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends GenerCreateManyArgs>(
			args?: SelectSubset<T, GenerCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Geners and returns the data saved in the database.
		 * @param {GenerCreateManyAndReturnArgs} args - Arguments to create many Geners.
		 * @example
		 * // Create many Geners
		 * const gener = await prisma.gener.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Geners and only return the `id`
		 * const generWithIdOnly = await prisma.gener.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends GenerCreateManyAndReturnArgs>(
			args?: SelectSubset<T, GenerCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'createManyAndReturn'>
		>

		/**
		 * Delete a Gener.
		 * @param {GenerDeleteArgs} args - Arguments to delete one Gener.
		 * @example
		 * // Delete one Gener
		 * const Gener = await prisma.gener.delete({
		 *   where: {
		 *     // ... filter to delete one Gener
		 *   }
		 * })
		 *
		 */
		delete<T extends GenerDeleteArgs>(
			args: SelectSubset<T, GenerDeleteArgs<ExtArgs>>
		): Prisma__GenerClient<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'delete'>,
			never,
			ExtArgs
		>

		/**
		 * Update one Gener.
		 * @param {GenerUpdateArgs} args - Arguments to update one Gener.
		 * @example
		 * // Update one Gener
		 * const gener = await prisma.gener.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends GenerUpdateArgs>(
			args: SelectSubset<T, GenerUpdateArgs<ExtArgs>>
		): Prisma__GenerClient<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'update'>,
			never,
			ExtArgs
		>

		/**
		 * Delete zero or more Geners.
		 * @param {GenerDeleteManyArgs} args - Arguments to filter Geners to delete.
		 * @example
		 * // Delete a few Geners
		 * const { count } = await prisma.gener.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends GenerDeleteManyArgs>(
			args?: SelectSubset<T, GenerDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Geners.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GenerUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Geners
		 * const gener = await prisma.gener.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends GenerUpdateManyArgs>(
			args: SelectSubset<T, GenerUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create or update one Gener.
		 * @param {GenerUpsertArgs} args - Arguments to update or create a Gener.
		 * @example
		 * // Update or create a Gener
		 * const gener = await prisma.gener.upsert({
		 *   create: {
		 *     // ... data to create a Gener
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Gener we want to update
		 *   }
		 * })
		 */
		upsert<T extends GenerUpsertArgs>(
			args: SelectSubset<T, GenerUpsertArgs<ExtArgs>>
		): Prisma__GenerClient<
			$Result.GetResult<Prisma.$GenerPayload<ExtArgs>, T, 'upsert'>,
			never,
			ExtArgs
		>

		/**
		 * Count the number of Geners.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GenerCountArgs} args - Arguments to filter Geners to count.
		 * @example
		 * // Count the number of Geners
		 * const count = await prisma.gener.count({
		 *   where: {
		 *     // ... the filter for the Geners we want to count
		 *   }
		 * })
		 **/
		count<T extends GenerCountArgs>(
			args?: Subset<T, GenerCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], GenerCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a Gener.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GenerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends GenerAggregateArgs>(
			args: Subset<T, GenerAggregateArgs>
		): Prisma.PrismaPromise<GetGenerAggregateType<T>>

		/**
		 * Group by Gener.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {GenerGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends GenerGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: GenerGroupByArgs['orderBy'] }
				: { orderBy?: GenerGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											'Field ',
											P,
											` in "having" needs to be provided in "by"`
										]
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
		>(
			args: SubsetIntersection<T, GenerGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors
			? GetGenerGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Gener model
		 */
		readonly fields: GenerFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Gener.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__GenerClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		applications<T extends Gener$applicationsArgs<ExtArgs> = {}>(
			args?: Subset<T, Gener$applicationsArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'>
			| Null
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Gener model
	 */
	interface GenerFieldRefs {
		readonly id: FieldRef<'Gener', 'Int'>
		readonly name: FieldRef<'Gener', 'String'>
		readonly slug: FieldRef<'Gener', 'String'>
	}

	// Custom InputTypes
	/**
	 * Gener findUnique
	 */
	export type GenerFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * Filter, which Gener to fetch.
		 */
		where: GenerWhereUniqueInput
	}

	/**
	 * Gener findUniqueOrThrow
	 */
	export type GenerFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * Filter, which Gener to fetch.
		 */
		where: GenerWhereUniqueInput
	}

	/**
	 * Gener findFirst
	 */
	export type GenerFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * Filter, which Gener to fetch.
		 */
		where?: GenerWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Geners to fetch.
		 */
		orderBy?: GenerOrderByWithRelationInput | GenerOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Geners.
		 */
		cursor?: GenerWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Geners from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Geners.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Geners.
		 */
		distinct?: GenerScalarFieldEnum | GenerScalarFieldEnum[]
	}

	/**
	 * Gener findFirstOrThrow
	 */
	export type GenerFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * Filter, which Gener to fetch.
		 */
		where?: GenerWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Geners to fetch.
		 */
		orderBy?: GenerOrderByWithRelationInput | GenerOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Geners.
		 */
		cursor?: GenerWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Geners from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Geners.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Geners.
		 */
		distinct?: GenerScalarFieldEnum | GenerScalarFieldEnum[]
	}

	/**
	 * Gener findMany
	 */
	export type GenerFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * Filter, which Geners to fetch.
		 */
		where?: GenerWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Geners to fetch.
		 */
		orderBy?: GenerOrderByWithRelationInput | GenerOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Geners.
		 */
		cursor?: GenerWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Geners from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Geners.
		 */
		skip?: number
		distinct?: GenerScalarFieldEnum | GenerScalarFieldEnum[]
	}

	/**
	 * Gener create
	 */
	export type GenerCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * The data needed to create a Gener.
		 */
		data: XOR<GenerCreateInput, GenerUncheckedCreateInput>
	}

	/**
	 * Gener createMany
	 */
	export type GenerCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to create many Geners.
		 */
		data: GenerCreateManyInput | GenerCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Gener createManyAndReturn
	 */
	export type GenerCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * The data used to create many Geners.
		 */
		data: GenerCreateManyInput | GenerCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Gener update
	 */
	export type GenerUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * The data needed to update a Gener.
		 */
		data: XOR<GenerUpdateInput, GenerUncheckedUpdateInput>
		/**
		 * Choose, which Gener to update.
		 */
		where: GenerWhereUniqueInput
	}

	/**
	 * Gener updateMany
	 */
	export type GenerUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to update Geners.
		 */
		data: XOR<GenerUpdateManyMutationInput, GenerUncheckedUpdateManyInput>
		/**
		 * Filter which Geners to update
		 */
		where?: GenerWhereInput
	}

	/**
	 * Gener upsert
	 */
	export type GenerUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * The filter to search for the Gener to update in case it exists.
		 */
		where: GenerWhereUniqueInput
		/**
		 * In case the Gener found by the `where` argument doesn't exist, create a new Gener with this data.
		 */
		create: XOR<GenerCreateInput, GenerUncheckedCreateInput>
		/**
		 * In case the Gener was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<GenerUpdateInput, GenerUncheckedUpdateInput>
	}

	/**
	 * Gener delete
	 */
	export type GenerDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
		/**
		 * Filter which Gener to delete.
		 */
		where: GenerWhereUniqueInput
	}

	/**
	 * Gener deleteMany
	 */
	export type GenerDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Geners to delete
		 */
		where?: GenerWhereInput
	}

	/**
	 * Gener.applications
	 */
	export type Gener$applicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		where?: ApplicationWhereInput
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[]
		cursor?: ApplicationWhereUniqueInput
		take?: number
		skip?: number
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
	}

	/**
	 * Gener without action
	 */
	export type GenerDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Gener
		 */
		select?: GenerSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: GenerInclude<ExtArgs> | null
	}

	/**
	 * Model Developer
	 */

	export type AggregateDeveloper = {
		_count: DeveloperCountAggregateOutputType | null
		_avg: DeveloperAvgAggregateOutputType | null
		_sum: DeveloperSumAggregateOutputType | null
		_min: DeveloperMinAggregateOutputType | null
		_max: DeveloperMaxAggregateOutputType | null
	}

	export type DeveloperAvgAggregateOutputType = {
		id: number | null
	}

	export type DeveloperSumAggregateOutputType = {
		id: number | null
	}

	export type DeveloperMinAggregateOutputType = {
		id: number | null
		name: string | null
	}

	export type DeveloperMaxAggregateOutputType = {
		id: number | null
		name: string | null
	}

	export type DeveloperCountAggregateOutputType = {
		id: number
		name: number
		_all: number
	}

	export type DeveloperAvgAggregateInputType = {
		id?: true
	}

	export type DeveloperSumAggregateInputType = {
		id?: true
	}

	export type DeveloperMinAggregateInputType = {
		id?: true
		name?: true
	}

	export type DeveloperMaxAggregateInputType = {
		id?: true
		name?: true
	}

	export type DeveloperCountAggregateInputType = {
		id?: true
		name?: true
		_all?: true
	}

	export type DeveloperAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Developer to aggregate.
		 */
		where?: DeveloperWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Developers to fetch.
		 */
		orderBy?:
			| DeveloperOrderByWithRelationInput
			| DeveloperOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: DeveloperWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Developers from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Developers.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Developers
		 **/
		_count?: true | DeveloperCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: DeveloperAvgAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: DeveloperSumAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: DeveloperMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: DeveloperMaxAggregateInputType
	}

	export type GetDeveloperAggregateType<T extends DeveloperAggregateArgs> = {
		[P in keyof T & keyof AggregateDeveloper]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateDeveloper[P]>
			: GetScalarType<T[P], AggregateDeveloper[P]>
	}

	export type DeveloperGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: DeveloperWhereInput
		orderBy?:
			| DeveloperOrderByWithAggregationInput
			| DeveloperOrderByWithAggregationInput[]
		by: DeveloperScalarFieldEnum[] | DeveloperScalarFieldEnum
		having?: DeveloperScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: DeveloperCountAggregateInputType | true
		_avg?: DeveloperAvgAggregateInputType
		_sum?: DeveloperSumAggregateInputType
		_min?: DeveloperMinAggregateInputType
		_max?: DeveloperMaxAggregateInputType
	}

	export type DeveloperGroupByOutputType = {
		id: number
		name: string
		_count: DeveloperCountAggregateOutputType | null
		_avg: DeveloperAvgAggregateOutputType | null
		_sum: DeveloperSumAggregateOutputType | null
		_min: DeveloperMinAggregateOutputType | null
		_max: DeveloperMaxAggregateOutputType | null
	}

	type GetDeveloperGroupByPayload<T extends DeveloperGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<DeveloperGroupByOutputType, T['by']> & {
					[P in keyof T & keyof DeveloperGroupByOutputType]: P extends '_count'
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], DeveloperGroupByOutputType[P]>
						: GetScalarType<T[P], DeveloperGroupByOutputType[P]>
				}
			>
		>

	export type DeveloperSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
			applications?: boolean | Developer$applicationsArgs<ExtArgs>
			_count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
		},
		ExtArgs['result']['developer']
	>

	export type DeveloperSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
		},
		ExtArgs['result']['developer']
	>

	export type DeveloperSelectScalar = {
		id?: boolean
		name?: boolean
	}

	export type DeveloperInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		applications?: boolean | Developer$applicationsArgs<ExtArgs>
		_count?: boolean | DeveloperCountOutputTypeDefaultArgs<ExtArgs>
	}
	export type DeveloperIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {}

	export type $DeveloperPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		name: 'Developer'
		objects: {
			applications: Prisma.$ApplicationPayload<ExtArgs>[]
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: number
				name: string
			},
			ExtArgs['result']['developer']
		>
		composites: {}
	}

	type DeveloperGetPayload<
		S extends boolean | null | undefined | DeveloperDefaultArgs
	> = $Result.GetResult<Prisma.$DeveloperPayload, S>

	type DeveloperCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = Omit<DeveloperFindManyArgs, 'select' | 'include' | 'distinct'> & {
		select?: DeveloperCountAggregateInputType | true
	}

	export interface DeveloperDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Developer']
			meta: { name: 'Developer' }
		}
		/**
		 * Find zero or one Developer that matches the filter.
		 * @param {DeveloperFindUniqueArgs} args - Arguments to find a Developer
		 * @example
		 * // Get one Developer
		 * const developer = await prisma.developer.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends DeveloperFindUniqueArgs>(
			args: SelectSubset<T, DeveloperFindUniqueArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<
				Prisma.$DeveloperPayload<ExtArgs>,
				T,
				'findUnique'
			> | null,
			null,
			ExtArgs
		>

		/**
		 * Find one Developer that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {DeveloperFindUniqueOrThrowArgs} args - Arguments to find a Developer
		 * @example
		 * // Get one Developer
		 * const developer = await prisma.developer.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends DeveloperFindUniqueOrThrowArgs>(
			args: SelectSubset<T, DeveloperFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<
				Prisma.$DeveloperPayload<ExtArgs>,
				T,
				'findUniqueOrThrow'
			>,
			never,
			ExtArgs
		>

		/**
		 * Find the first Developer that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {DeveloperFindFirstArgs} args - Arguments to find a Developer
		 * @example
		 * // Get one Developer
		 * const developer = await prisma.developer.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends DeveloperFindFirstArgs>(
			args?: SelectSubset<T, DeveloperFindFirstArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<
				Prisma.$DeveloperPayload<ExtArgs>,
				T,
				'findFirst'
			> | null,
			null,
			ExtArgs
		>

		/**
		 * Find the first Developer that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {DeveloperFindFirstOrThrowArgs} args - Arguments to find a Developer
		 * @example
		 * // Get one Developer
		 * const developer = await prisma.developer.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends DeveloperFindFirstOrThrowArgs>(
			args?: SelectSubset<T, DeveloperFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<
				Prisma.$DeveloperPayload<ExtArgs>,
				T,
				'findFirstOrThrow'
			>,
			never,
			ExtArgs
		>

		/**
		 * Find zero or more Developers that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {DeveloperFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Developers
		 * const developers = await prisma.developer.findMany()
		 *
		 * // Get first 10 Developers
		 * const developers = await prisma.developer.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const developerWithIdOnly = await prisma.developer.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends DeveloperFindManyArgs>(
			args?: SelectSubset<T, DeveloperFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, 'findMany'>
		>

		/**
		 * Create a Developer.
		 * @param {DeveloperCreateArgs} args - Arguments to create a Developer.
		 * @example
		 * // Create one Developer
		 * const Developer = await prisma.developer.create({
		 *   data: {
		 *     // ... data to create a Developer
		 *   }
		 * })
		 *
		 */
		create<T extends DeveloperCreateArgs>(
			args: SelectSubset<T, DeveloperCreateArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, 'create'>,
			never,
			ExtArgs
		>

		/**
		 * Create many Developers.
		 * @param {DeveloperCreateManyArgs} args - Arguments to create many Developers.
		 * @example
		 * // Create many Developers
		 * const developer = await prisma.developer.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends DeveloperCreateManyArgs>(
			args?: SelectSubset<T, DeveloperCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Developers and returns the data saved in the database.
		 * @param {DeveloperCreateManyAndReturnArgs} args - Arguments to create many Developers.
		 * @example
		 * // Create many Developers
		 * const developer = await prisma.developer.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Developers and only return the `id`
		 * const developerWithIdOnly = await prisma.developer.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends DeveloperCreateManyAndReturnArgs>(
			args?: SelectSubset<T, DeveloperCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$DeveloperPayload<ExtArgs>,
				T,
				'createManyAndReturn'
			>
		>

		/**
		 * Delete a Developer.
		 * @param {DeveloperDeleteArgs} args - Arguments to delete one Developer.
		 * @example
		 * // Delete one Developer
		 * const Developer = await prisma.developer.delete({
		 *   where: {
		 *     // ... filter to delete one Developer
		 *   }
		 * })
		 *
		 */
		delete<T extends DeveloperDeleteArgs>(
			args: SelectSubset<T, DeveloperDeleteArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, 'delete'>,
			never,
			ExtArgs
		>

		/**
		 * Update one Developer.
		 * @param {DeveloperUpdateArgs} args - Arguments to update one Developer.
		 * @example
		 * // Update one Developer
		 * const developer = await prisma.developer.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends DeveloperUpdateArgs>(
			args: SelectSubset<T, DeveloperUpdateArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, 'update'>,
			never,
			ExtArgs
		>

		/**
		 * Delete zero or more Developers.
		 * @param {DeveloperDeleteManyArgs} args - Arguments to filter Developers to delete.
		 * @example
		 * // Delete a few Developers
		 * const { count } = await prisma.developer.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends DeveloperDeleteManyArgs>(
			args?: SelectSubset<T, DeveloperDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Developers.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {DeveloperUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Developers
		 * const developer = await prisma.developer.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends DeveloperUpdateManyArgs>(
			args: SelectSubset<T, DeveloperUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create or update one Developer.
		 * @param {DeveloperUpsertArgs} args - Arguments to update or create a Developer.
		 * @example
		 * // Update or create a Developer
		 * const developer = await prisma.developer.upsert({
		 *   create: {
		 *     // ... data to create a Developer
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Developer we want to update
		 *   }
		 * })
		 */
		upsert<T extends DeveloperUpsertArgs>(
			args: SelectSubset<T, DeveloperUpsertArgs<ExtArgs>>
		): Prisma__DeveloperClient<
			$Result.GetResult<Prisma.$DeveloperPayload<ExtArgs>, T, 'upsert'>,
			never,
			ExtArgs
		>

		/**
		 * Count the number of Developers.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {DeveloperCountArgs} args - Arguments to filter Developers to count.
		 * @example
		 * // Count the number of Developers
		 * const count = await prisma.developer.count({
		 *   where: {
		 *     // ... the filter for the Developers we want to count
		 *   }
		 * })
		 **/
		count<T extends DeveloperCountArgs>(
			args?: Subset<T, DeveloperCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], DeveloperCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a Developer.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {DeveloperAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends DeveloperAggregateArgs>(
			args: Subset<T, DeveloperAggregateArgs>
		): Prisma.PrismaPromise<GetDeveloperAggregateType<T>>

		/**
		 * Group by Developer.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {DeveloperGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends DeveloperGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: DeveloperGroupByArgs['orderBy'] }
				: { orderBy?: DeveloperGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											'Field ',
											P,
											` in "having" needs to be provided in "by"`
										]
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
		>(
			args: SubsetIntersection<T, DeveloperGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetDeveloperGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Developer model
		 */
		readonly fields: DeveloperFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Developer.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__DeveloperClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		applications<T extends Developer$applicationsArgs<ExtArgs> = {}>(
			args?: Subset<T, Developer$applicationsArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'>
			| Null
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Developer model
	 */
	interface DeveloperFieldRefs {
		readonly id: FieldRef<'Developer', 'Int'>
		readonly name: FieldRef<'Developer', 'String'>
	}

	// Custom InputTypes
	/**
	 * Developer findUnique
	 */
	export type DeveloperFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * Filter, which Developer to fetch.
		 */
		where: DeveloperWhereUniqueInput
	}

	/**
	 * Developer findUniqueOrThrow
	 */
	export type DeveloperFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * Filter, which Developer to fetch.
		 */
		where: DeveloperWhereUniqueInput
	}

	/**
	 * Developer findFirst
	 */
	export type DeveloperFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * Filter, which Developer to fetch.
		 */
		where?: DeveloperWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Developers to fetch.
		 */
		orderBy?:
			| DeveloperOrderByWithRelationInput
			| DeveloperOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Developers.
		 */
		cursor?: DeveloperWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Developers from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Developers.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Developers.
		 */
		distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
	}

	/**
	 * Developer findFirstOrThrow
	 */
	export type DeveloperFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * Filter, which Developer to fetch.
		 */
		where?: DeveloperWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Developers to fetch.
		 */
		orderBy?:
			| DeveloperOrderByWithRelationInput
			| DeveloperOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Developers.
		 */
		cursor?: DeveloperWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Developers from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Developers.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Developers.
		 */
		distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
	}

	/**
	 * Developer findMany
	 */
	export type DeveloperFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * Filter, which Developers to fetch.
		 */
		where?: DeveloperWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Developers to fetch.
		 */
		orderBy?:
			| DeveloperOrderByWithRelationInput
			| DeveloperOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Developers.
		 */
		cursor?: DeveloperWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Developers from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Developers.
		 */
		skip?: number
		distinct?: DeveloperScalarFieldEnum | DeveloperScalarFieldEnum[]
	}

	/**
	 * Developer create
	 */
	export type DeveloperCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * The data needed to create a Developer.
		 */
		data: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
	}

	/**
	 * Developer createMany
	 */
	export type DeveloperCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to create many Developers.
		 */
		data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Developer createManyAndReturn
	 */
	export type DeveloperCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * The data used to create many Developers.
		 */
		data: DeveloperCreateManyInput | DeveloperCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Developer update
	 */
	export type DeveloperUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * The data needed to update a Developer.
		 */
		data: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
		/**
		 * Choose, which Developer to update.
		 */
		where: DeveloperWhereUniqueInput
	}

	/**
	 * Developer updateMany
	 */
	export type DeveloperUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to update Developers.
		 */
		data: XOR<
			DeveloperUpdateManyMutationInput,
			DeveloperUncheckedUpdateManyInput
		>
		/**
		 * Filter which Developers to update
		 */
		where?: DeveloperWhereInput
	}

	/**
	 * Developer upsert
	 */
	export type DeveloperUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * The filter to search for the Developer to update in case it exists.
		 */
		where: DeveloperWhereUniqueInput
		/**
		 * In case the Developer found by the `where` argument doesn't exist, create a new Developer with this data.
		 */
		create: XOR<DeveloperCreateInput, DeveloperUncheckedCreateInput>
		/**
		 * In case the Developer was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<DeveloperUpdateInput, DeveloperUncheckedUpdateInput>
	}

	/**
	 * Developer delete
	 */
	export type DeveloperDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
		/**
		 * Filter which Developer to delete.
		 */
		where: DeveloperWhereUniqueInput
	}

	/**
	 * Developer deleteMany
	 */
	export type DeveloperDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Developers to delete
		 */
		where?: DeveloperWhereInput
	}

	/**
	 * Developer.applications
	 */
	export type Developer$applicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		where?: ApplicationWhereInput
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[]
		cursor?: ApplicationWhereUniqueInput
		take?: number
		skip?: number
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
	}

	/**
	 * Developer without action
	 */
	export type DeveloperDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Developer
		 */
		select?: DeveloperSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: DeveloperInclude<ExtArgs> | null
	}

	/**
	 * Model Publisher
	 */

	export type AggregatePublisher = {
		_count: PublisherCountAggregateOutputType | null
		_avg: PublisherAvgAggregateOutputType | null
		_sum: PublisherSumAggregateOutputType | null
		_min: PublisherMinAggregateOutputType | null
		_max: PublisherMaxAggregateOutputType | null
	}

	export type PublisherAvgAggregateOutputType = {
		id: number | null
	}

	export type PublisherSumAggregateOutputType = {
		id: number | null
	}

	export type PublisherMinAggregateOutputType = {
		id: number | null
		name: string | null
	}

	export type PublisherMaxAggregateOutputType = {
		id: number | null
		name: string | null
	}

	export type PublisherCountAggregateOutputType = {
		id: number
		name: number
		_all: number
	}

	export type PublisherAvgAggregateInputType = {
		id?: true
	}

	export type PublisherSumAggregateInputType = {
		id?: true
	}

	export type PublisherMinAggregateInputType = {
		id?: true
		name?: true
	}

	export type PublisherMaxAggregateInputType = {
		id?: true
		name?: true
	}

	export type PublisherCountAggregateInputType = {
		id?: true
		name?: true
		_all?: true
	}

	export type PublisherAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Publisher to aggregate.
		 */
		where?: PublisherWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Publishers to fetch.
		 */
		orderBy?:
			| PublisherOrderByWithRelationInput
			| PublisherOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: PublisherWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Publishers from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Publishers.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Publishers
		 **/
		_count?: true | PublisherCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: PublisherAvgAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: PublisherSumAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: PublisherMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: PublisherMaxAggregateInputType
	}

	export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
		[P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregatePublisher[P]>
			: GetScalarType<T[P], AggregatePublisher[P]>
	}

	export type PublisherGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: PublisherWhereInput
		orderBy?:
			| PublisherOrderByWithAggregationInput
			| PublisherOrderByWithAggregationInput[]
		by: PublisherScalarFieldEnum[] | PublisherScalarFieldEnum
		having?: PublisherScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: PublisherCountAggregateInputType | true
		_avg?: PublisherAvgAggregateInputType
		_sum?: PublisherSumAggregateInputType
		_min?: PublisherMinAggregateInputType
		_max?: PublisherMaxAggregateInputType
	}

	export type PublisherGroupByOutputType = {
		id: number
		name: string
		_count: PublisherCountAggregateOutputType | null
		_avg: PublisherAvgAggregateOutputType | null
		_sum: PublisherSumAggregateOutputType | null
		_min: PublisherMinAggregateOutputType | null
		_max: PublisherMaxAggregateOutputType | null
	}

	type GetPublisherGroupByPayload<T extends PublisherGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<PublisherGroupByOutputType, T['by']> & {
					[P in keyof T & keyof PublisherGroupByOutputType]: P extends '_count'
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], PublisherGroupByOutputType[P]>
						: GetScalarType<T[P], PublisherGroupByOutputType[P]>
				}
			>
		>

	export type PublisherSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
			applications?: boolean | Publisher$applicationsArgs<ExtArgs>
			_count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
		},
		ExtArgs['result']['publisher']
	>

	export type PublisherSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			name?: boolean
		},
		ExtArgs['result']['publisher']
	>

	export type PublisherSelectScalar = {
		id?: boolean
		name?: boolean
	}

	export type PublisherInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		applications?: boolean | Publisher$applicationsArgs<ExtArgs>
		_count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
	}
	export type PublisherIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {}

	export type $PublisherPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		name: 'Publisher'
		objects: {
			applications: Prisma.$ApplicationPayload<ExtArgs>[]
		}
		scalars: $Extensions.GetPayloadResult<
			{
				id: number
				name: string
			},
			ExtArgs['result']['publisher']
		>
		composites: {}
	}

	type PublisherGetPayload<
		S extends boolean | null | undefined | PublisherDefaultArgs
	> = $Result.GetResult<Prisma.$PublisherPayload, S>

	type PublisherCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = Omit<PublisherFindManyArgs, 'select' | 'include' | 'distinct'> & {
		select?: PublisherCountAggregateInputType | true
	}

	export interface PublisherDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Publisher']
			meta: { name: 'Publisher' }
		}
		/**
		 * Find zero or one Publisher that matches the filter.
		 * @param {PublisherFindUniqueArgs} args - Arguments to find a Publisher
		 * @example
		 * // Get one Publisher
		 * const publisher = await prisma.publisher.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends PublisherFindUniqueArgs>(
			args: SelectSubset<T, PublisherFindUniqueArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<
				Prisma.$PublisherPayload<ExtArgs>,
				T,
				'findUnique'
			> | null,
			null,
			ExtArgs
		>

		/**
		 * Find one Publisher that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {PublisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
		 * @example
		 * // Get one Publisher
		 * const publisher = await prisma.publisher.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends PublisherFindUniqueOrThrowArgs>(
			args: SelectSubset<T, PublisherFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<
				Prisma.$PublisherPayload<ExtArgs>,
				T,
				'findUniqueOrThrow'
			>,
			never,
			ExtArgs
		>

		/**
		 * Find the first Publisher that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublisherFindFirstArgs} args - Arguments to find a Publisher
		 * @example
		 * // Get one Publisher
		 * const publisher = await prisma.publisher.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends PublisherFindFirstArgs>(
			args?: SelectSubset<T, PublisherFindFirstArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<
				Prisma.$PublisherPayload<ExtArgs>,
				T,
				'findFirst'
			> | null,
			null,
			ExtArgs
		>

		/**
		 * Find the first Publisher that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
		 * @example
		 * // Get one Publisher
		 * const publisher = await prisma.publisher.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends PublisherFindFirstOrThrowArgs>(
			args?: SelectSubset<T, PublisherFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<
				Prisma.$PublisherPayload<ExtArgs>,
				T,
				'findFirstOrThrow'
			>,
			never,
			ExtArgs
		>

		/**
		 * Find zero or more Publishers that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublisherFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Publishers
		 * const publishers = await prisma.publisher.findMany()
		 *
		 * // Get first 10 Publishers
		 * const publishers = await prisma.publisher.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const publisherWithIdOnly = await prisma.publisher.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends PublisherFindManyArgs>(
			args?: SelectSubset<T, PublisherFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'findMany'>
		>

		/**
		 * Create a Publisher.
		 * @param {PublisherCreateArgs} args - Arguments to create a Publisher.
		 * @example
		 * // Create one Publisher
		 * const Publisher = await prisma.publisher.create({
		 *   data: {
		 *     // ... data to create a Publisher
		 *   }
		 * })
		 *
		 */
		create<T extends PublisherCreateArgs>(
			args: SelectSubset<T, PublisherCreateArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'create'>,
			never,
			ExtArgs
		>

		/**
		 * Create many Publishers.
		 * @param {PublisherCreateManyArgs} args - Arguments to create many Publishers.
		 * @example
		 * // Create many Publishers
		 * const publisher = await prisma.publisher.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends PublisherCreateManyArgs>(
			args?: SelectSubset<T, PublisherCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Publishers and returns the data saved in the database.
		 * @param {PublisherCreateManyAndReturnArgs} args - Arguments to create many Publishers.
		 * @example
		 * // Create many Publishers
		 * const publisher = await prisma.publisher.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Publishers and only return the `id`
		 * const publisherWithIdOnly = await prisma.publisher.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends PublisherCreateManyAndReturnArgs>(
			args?: SelectSubset<T, PublisherCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$PublisherPayload<ExtArgs>,
				T,
				'createManyAndReturn'
			>
		>

		/**
		 * Delete a Publisher.
		 * @param {PublisherDeleteArgs} args - Arguments to delete one Publisher.
		 * @example
		 * // Delete one Publisher
		 * const Publisher = await prisma.publisher.delete({
		 *   where: {
		 *     // ... filter to delete one Publisher
		 *   }
		 * })
		 *
		 */
		delete<T extends PublisherDeleteArgs>(
			args: SelectSubset<T, PublisherDeleteArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'delete'>,
			never,
			ExtArgs
		>

		/**
		 * Update one Publisher.
		 * @param {PublisherUpdateArgs} args - Arguments to update one Publisher.
		 * @example
		 * // Update one Publisher
		 * const publisher = await prisma.publisher.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends PublisherUpdateArgs>(
			args: SelectSubset<T, PublisherUpdateArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'update'>,
			never,
			ExtArgs
		>

		/**
		 * Delete zero or more Publishers.
		 * @param {PublisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
		 * @example
		 * // Delete a few Publishers
		 * const { count } = await prisma.publisher.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends PublisherDeleteManyArgs>(
			args?: SelectSubset<T, PublisherDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Publishers.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublisherUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Publishers
		 * const publisher = await prisma.publisher.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends PublisherUpdateManyArgs>(
			args: SelectSubset<T, PublisherUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create or update one Publisher.
		 * @param {PublisherUpsertArgs} args - Arguments to update or create a Publisher.
		 * @example
		 * // Update or create a Publisher
		 * const publisher = await prisma.publisher.upsert({
		 *   create: {
		 *     // ... data to create a Publisher
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Publisher we want to update
		 *   }
		 * })
		 */
		upsert<T extends PublisherUpsertArgs>(
			args: SelectSubset<T, PublisherUpsertArgs<ExtArgs>>
		): Prisma__PublisherClient<
			$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, 'upsert'>,
			never,
			ExtArgs
		>

		/**
		 * Count the number of Publishers.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublisherCountArgs} args - Arguments to filter Publishers to count.
		 * @example
		 * // Count the number of Publishers
		 * const count = await prisma.publisher.count({
		 *   where: {
		 *     // ... the filter for the Publishers we want to count
		 *   }
		 * })
		 **/
		count<T extends PublisherCountArgs>(
			args?: Subset<T, PublisherCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], PublisherCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a Publisher.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends PublisherAggregateArgs>(
			args: Subset<T, PublisherAggregateArgs>
		): Prisma.PrismaPromise<GetPublisherAggregateType<T>>

		/**
		 * Group by Publisher.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {PublisherGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends PublisherGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: PublisherGroupByArgs['orderBy'] }
				: { orderBy?: PublisherGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											'Field ',
											P,
											` in "having" needs to be provided in "by"`
										]
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
		>(
			args: SubsetIntersection<T, PublisherGroupByArgs, OrderByArg> &
				InputErrors
		): {} extends InputErrors
			? GetPublisherGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the Publisher model
		 */
		readonly fields: PublisherFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Publisher.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__PublisherClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		applications<T extends Publisher$applicationsArgs<ExtArgs> = {}>(
			args?: Subset<T, Publisher$applicationsArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'>
			| Null
		>
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the Publisher model
	 */
	interface PublisherFieldRefs {
		readonly id: FieldRef<'Publisher', 'Int'>
		readonly name: FieldRef<'Publisher', 'String'>
	}

	// Custom InputTypes
	/**
	 * Publisher findUnique
	 */
	export type PublisherFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * Filter, which Publisher to fetch.
		 */
		where: PublisherWhereUniqueInput
	}

	/**
	 * Publisher findUniqueOrThrow
	 */
	export type PublisherFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * Filter, which Publisher to fetch.
		 */
		where: PublisherWhereUniqueInput
	}

	/**
	 * Publisher findFirst
	 */
	export type PublisherFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * Filter, which Publisher to fetch.
		 */
		where?: PublisherWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Publishers to fetch.
		 */
		orderBy?:
			| PublisherOrderByWithRelationInput
			| PublisherOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Publishers.
		 */
		cursor?: PublisherWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Publishers from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Publishers.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Publishers.
		 */
		distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
	}

	/**
	 * Publisher findFirstOrThrow
	 */
	export type PublisherFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * Filter, which Publisher to fetch.
		 */
		where?: PublisherWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Publishers to fetch.
		 */
		orderBy?:
			| PublisherOrderByWithRelationInput
			| PublisherOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Publishers.
		 */
		cursor?: PublisherWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Publishers from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Publishers.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Publishers.
		 */
		distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
	}

	/**
	 * Publisher findMany
	 */
	export type PublisherFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * Filter, which Publishers to fetch.
		 */
		where?: PublisherWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Publishers to fetch.
		 */
		orderBy?:
			| PublisherOrderByWithRelationInput
			| PublisherOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Publishers.
		 */
		cursor?: PublisherWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Publishers from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Publishers.
		 */
		skip?: number
		distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
	}

	/**
	 * Publisher create
	 */
	export type PublisherCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * The data needed to create a Publisher.
		 */
		data: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
	}

	/**
	 * Publisher createMany
	 */
	export type PublisherCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to create many Publishers.
		 */
		data: PublisherCreateManyInput | PublisherCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Publisher createManyAndReturn
	 */
	export type PublisherCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * The data used to create many Publishers.
		 */
		data: PublisherCreateManyInput | PublisherCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * Publisher update
	 */
	export type PublisherUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * The data needed to update a Publisher.
		 */
		data: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
		/**
		 * Choose, which Publisher to update.
		 */
		where: PublisherWhereUniqueInput
	}

	/**
	 * Publisher updateMany
	 */
	export type PublisherUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to update Publishers.
		 */
		data: XOR<
			PublisherUpdateManyMutationInput,
			PublisherUncheckedUpdateManyInput
		>
		/**
		 * Filter which Publishers to update
		 */
		where?: PublisherWhereInput
	}

	/**
	 * Publisher upsert
	 */
	export type PublisherUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * The filter to search for the Publisher to update in case it exists.
		 */
		where: PublisherWhereUniqueInput
		/**
		 * In case the Publisher found by the `where` argument doesn't exist, create a new Publisher with this data.
		 */
		create: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
		/**
		 * In case the Publisher was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
	}

	/**
	 * Publisher delete
	 */
	export type PublisherDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
		/**
		 * Filter which Publisher to delete.
		 */
		where: PublisherWhereUniqueInput
	}

	/**
	 * Publisher deleteMany
	 */
	export type PublisherDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Publishers to delete
		 */
		where?: PublisherWhereInput
	}

	/**
	 * Publisher.applications
	 */
	export type Publisher$applicationsArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Application
		 */
		select?: ApplicationSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: ApplicationInclude<ExtArgs> | null
		where?: ApplicationWhereInput
		orderBy?:
			| ApplicationOrderByWithRelationInput
			| ApplicationOrderByWithRelationInput[]
		cursor?: ApplicationWhereUniqueInput
		take?: number
		skip?: number
		distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
	}

	/**
	 * Publisher without action
	 */
	export type PublisherDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the Publisher
		 */
		select?: PublisherSelect<ExtArgs> | null
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: PublisherInclude<ExtArgs> | null
	}

	/**
	 * Model File
	 */

	export type AggregateFile = {
		_count: FileCountAggregateOutputType | null
		_min: FileMinAggregateOutputType | null
		_max: FileMaxAggregateOutputType | null
	}

	export type FileMinAggregateOutputType = {
		id: string | null
		createdAt: Date | null
		title: string | null
		alt: string | null
		caption: string | null
		path: string | null
		mimeType: string | null
	}

	export type FileMaxAggregateOutputType = {
		id: string | null
		createdAt: Date | null
		title: string | null
		alt: string | null
		caption: string | null
		path: string | null
		mimeType: string | null
	}

	export type FileCountAggregateOutputType = {
		id: number
		createdAt: number
		title: number
		alt: number
		caption: number
		path: number
		mimeType: number
		_all: number
	}

	export type FileMinAggregateInputType = {
		id?: true
		createdAt?: true
		title?: true
		alt?: true
		caption?: true
		path?: true
		mimeType?: true
	}

	export type FileMaxAggregateInputType = {
		id?: true
		createdAt?: true
		title?: true
		alt?: true
		caption?: true
		path?: true
		mimeType?: true
	}

	export type FileCountAggregateInputType = {
		id?: true
		createdAt?: true
		title?: true
		alt?: true
		caption?: true
		path?: true
		mimeType?: true
		_all?: true
	}

	export type FileAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which File to aggregate.
		 */
		where?: FileWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Files to fetch.
		 */
		orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: FileWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Files from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Files.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Files
		 **/
		_count?: true | FileCountAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: FileMinAggregateInputType
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: FileMaxAggregateInputType
	}

	export type GetFileAggregateType<T extends FileAggregateArgs> = {
		[P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateFile[P]>
			: GetScalarType<T[P], AggregateFile[P]>
	}

	export type FileGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		where?: FileWhereInput
		orderBy?:
			| FileOrderByWithAggregationInput
			| FileOrderByWithAggregationInput[]
		by: FileScalarFieldEnum[] | FileScalarFieldEnum
		having?: FileScalarWhereWithAggregatesInput
		take?: number
		skip?: number
		_count?: FileCountAggregateInputType | true
		_min?: FileMinAggregateInputType
		_max?: FileMaxAggregateInputType
	}

	export type FileGroupByOutputType = {
		id: string
		createdAt: Date
		title: string | null
		alt: string | null
		caption: string | null
		path: string
		mimeType: string | null
		_count: FileCountAggregateOutputType | null
		_min: FileMinAggregateOutputType | null
		_max: FileMaxAggregateOutputType | null
	}

	type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<FileGroupByOutputType, T['by']> & {
				[P in keyof T & keyof FileGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], FileGroupByOutputType[P]>
					: GetScalarType<T[P], FileGroupByOutputType[P]>
			}
		>
	>

	export type FileSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			createdAt?: boolean
			title?: boolean
			alt?: boolean
			caption?: boolean
			path?: boolean
			mimeType?: boolean
		},
		ExtArgs['result']['file']
	>

	export type FileSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = $Extensions.GetSelect<
		{
			id?: boolean
			createdAt?: boolean
			title?: boolean
			alt?: boolean
			caption?: boolean
			path?: boolean
			mimeType?: boolean
		},
		ExtArgs['result']['file']
	>

	export type FileSelectScalar = {
		id?: boolean
		createdAt?: boolean
		title?: boolean
		alt?: boolean
		caption?: boolean
		path?: boolean
		mimeType?: boolean
	}

	export type $FilePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		name: 'File'
		objects: {}
		scalars: $Extensions.GetPayloadResult<
			{
				id: string
				createdAt: Date
				title: string | null
				alt: string | null
				caption: string | null
				path: string
				mimeType: string | null
			},
			ExtArgs['result']['file']
		>
		composites: {}
	}

	type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> =
		$Result.GetResult<Prisma.$FilePayload, S>

	type FileCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
		select?: FileCountAggregateInputType | true
	}

	export interface FileDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['File']
			meta: { name: 'File' }
		}
		/**
		 * Find zero or one File that matches the filter.
		 * @param {FileFindUniqueArgs} args - Arguments to find a File
		 * @example
		 * // Get one File
		 * const file = await prisma.file.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends FileFindUniqueArgs>(
			args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>
		): Prisma__FileClient<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUnique'> | null,
			null,
			ExtArgs
		>

		/**
		 * Find one File that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
		 * @example
		 * // Get one File
		 * const file = await prisma.file.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(
			args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>
		): Prisma__FileClient<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
			never,
			ExtArgs
		>

		/**
		 * Find the first File that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FileFindFirstArgs} args - Arguments to find a File
		 * @example
		 * // Get one File
		 * const file = await prisma.file.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends FileFindFirstArgs>(
			args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>
		): Prisma__FileClient<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirst'> | null,
			null,
			ExtArgs
		>

		/**
		 * Find the first File that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
		 * @example
		 * // Get one File
		 * const file = await prisma.file.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(
			args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>
		): Prisma__FileClient<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirstOrThrow'>,
			never,
			ExtArgs
		>

		/**
		 * Find zero or more Files that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Files
		 * const files = await prisma.file.findMany()
		 *
		 * // Get first 10 Files
		 * const files = await prisma.file.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends FileFindManyArgs>(
			args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findMany'>
		>

		/**
		 * Create a File.
		 * @param {FileCreateArgs} args - Arguments to create a File.
		 * @example
		 * // Create one File
		 * const File = await prisma.file.create({
		 *   data: {
		 *     // ... data to create a File
		 *   }
		 * })
		 *
		 */
		create<T extends FileCreateArgs>(
			args: SelectSubset<T, FileCreateArgs<ExtArgs>>
		): Prisma__FileClient<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'create'>,
			never,
			ExtArgs
		>

		/**
		 * Create many Files.
		 * @param {FileCreateManyArgs} args - Arguments to create many Files.
		 * @example
		 * // Create many Files
		 * const file = await prisma.file.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends FileCreateManyArgs>(
			args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create many Files and returns the data saved in the database.
		 * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
		 * @example
		 * // Create many Files
		 * const file = await prisma.file.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Files and only return the `id`
		 * const fileWithIdOnly = await prisma.file.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends FileCreateManyAndReturnArgs>(
			args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'createManyAndReturn'>
		>

		/**
		 * Delete a File.
		 * @param {FileDeleteArgs} args - Arguments to delete one File.
		 * @example
		 * // Delete one File
		 * const File = await prisma.file.delete({
		 *   where: {
		 *     // ... filter to delete one File
		 *   }
		 * })
		 *
		 */
		delete<T extends FileDeleteArgs>(
			args: SelectSubset<T, FileDeleteArgs<ExtArgs>>
		): Prisma__FileClient<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'delete'>,
			never,
			ExtArgs
		>

		/**
		 * Update one File.
		 * @param {FileUpdateArgs} args - Arguments to update one File.
		 * @example
		 * // Update one File
		 * const file = await prisma.file.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends FileUpdateArgs>(
			args: SelectSubset<T, FileUpdateArgs<ExtArgs>>
		): Prisma__FileClient<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'update'>,
			never,
			ExtArgs
		>

		/**
		 * Delete zero or more Files.
		 * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
		 * @example
		 * // Delete a few Files
		 * const { count } = await prisma.file.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends FileDeleteManyArgs>(
			args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Update zero or more Files.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Files
		 * const file = await prisma.file.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends FileUpdateManyArgs>(
			args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>
		): Prisma.PrismaPromise<BatchPayload>

		/**
		 * Create or update one File.
		 * @param {FileUpsertArgs} args - Arguments to update or create a File.
		 * @example
		 * // Update or create a File
		 * const file = await prisma.file.upsert({
		 *   create: {
		 *     // ... data to create a File
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the File we want to update
		 *   }
		 * })
		 */
		upsert<T extends FileUpsertArgs>(
			args: SelectSubset<T, FileUpsertArgs<ExtArgs>>
		): Prisma__FileClient<
			$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'upsert'>,
			never,
			ExtArgs
		>

		/**
		 * Count the number of Files.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FileCountArgs} args - Arguments to filter Files to count.
		 * @example
		 * // Count the number of Files
		 * const count = await prisma.file.count({
		 *   where: {
		 *     // ... the filter for the Files we want to count
		 *   }
		 * })
		 **/
		count<T extends FileCountArgs>(
			args?: Subset<T, FileCountArgs>
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], FileCountAggregateOutputType>
				: number
		>

		/**
		 * Allows you to perform aggregations operations on a File.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends FileAggregateArgs>(
			args: Subset<T, FileAggregateArgs>
		): Prisma.PrismaPromise<GetFileAggregateType<T>>

		/**
		 * Group by File.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {FileGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends FileGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<'skip', Keys<T>>,
				Extends<'take', Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: FileGroupByArgs['orderBy'] }
				: { orderBy?: FileGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T['orderBy']>>
			>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [
											Error,
											'Field ',
											P,
											` in "having" needs to be provided in "by"`
										]
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
									}[OrderFields]
		>(
			args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors
		): {} extends InputErrors
			? GetFileGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>
		/**
		 * Fields of the File model
		 */
		readonly fields: FileFieldRefs
	}

	/**
	 * The delegate class that acts as a "Promise-like" for File.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__FileClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise'
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null
		): $Utils.JsPromise<TResult1 | TResult2>
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null
		): $Utils.JsPromise<T | TResult>
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
	}

	/**
	 * Fields of the File model
	 */
	interface FileFieldRefs {
		readonly id: FieldRef<'File', 'String'>
		readonly createdAt: FieldRef<'File', 'DateTime'>
		readonly title: FieldRef<'File', 'String'>
		readonly alt: FieldRef<'File', 'String'>
		readonly caption: FieldRef<'File', 'String'>
		readonly path: FieldRef<'File', 'String'>
		readonly mimeType: FieldRef<'File', 'String'>
	}

	// Custom InputTypes
	/**
	 * File findUnique
	 */
	export type FileFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * Filter, which File to fetch.
		 */
		where: FileWhereUniqueInput
	}

	/**
	 * File findUniqueOrThrow
	 */
	export type FileFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * Filter, which File to fetch.
		 */
		where: FileWhereUniqueInput
	}

	/**
	 * File findFirst
	 */
	export type FileFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * Filter, which File to fetch.
		 */
		where?: FileWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Files to fetch.
		 */
		orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Files.
		 */
		cursor?: FileWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Files from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Files.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Files.
		 */
		distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
	}

	/**
	 * File findFirstOrThrow
	 */
	export type FileFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * Filter, which File to fetch.
		 */
		where?: FileWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Files to fetch.
		 */
		orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Files.
		 */
		cursor?: FileWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Files from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Files.
		 */
		skip?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Files.
		 */
		distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
	}

	/**
	 * File findMany
	 */
	export type FileFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * Filter, which Files to fetch.
		 */
		where?: FileWhereInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Files to fetch.
		 */
		orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Files.
		 */
		cursor?: FileWhereUniqueInput
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Files from the position of the cursor.
		 */
		take?: number
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Files.
		 */
		skip?: number
		distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
	}

	/**
	 * File create
	 */
	export type FileCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * The data needed to create a File.
		 */
		data: XOR<FileCreateInput, FileUncheckedCreateInput>
	}

	/**
	 * File createMany
	 */
	export type FileCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to create many Files.
		 */
		data: FileCreateManyInput | FileCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * File createManyAndReturn
	 */
	export type FileCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelectCreateManyAndReturn<ExtArgs> | null
		/**
		 * The data used to create many Files.
		 */
		data: FileCreateManyInput | FileCreateManyInput[]
		skipDuplicates?: boolean
	}

	/**
	 * File update
	 */
	export type FileUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * The data needed to update a File.
		 */
		data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
		/**
		 * Choose, which File to update.
		 */
		where: FileWhereUniqueInput
	}

	/**
	 * File updateMany
	 */
	export type FileUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * The data used to update Files.
		 */
		data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
		/**
		 * Filter which Files to update
		 */
		where?: FileWhereInput
	}

	/**
	 * File upsert
	 */
	export type FileUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * The filter to search for the File to update in case it exists.
		 */
		where: FileWhereUniqueInput
		/**
		 * In case the File found by the `where` argument doesn't exist, create a new File with this data.
		 */
		create: XOR<FileCreateInput, FileUncheckedCreateInput>
		/**
		 * In case the File was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
	}

	/**
	 * File delete
	 */
	export type FileDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
		/**
		 * Filter which File to delete.
		 */
		where: FileWhereUniqueInput
	}

	/**
	 * File deleteMany
	 */
	export type FileDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Filter which Files to delete
		 */
		where?: FileWhereInput
	}

	/**
	 * File without action
	 */
	export type FileDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = {
		/**
		 * Select specific fields to fetch from the File
		 */
		select?: FileSelect<ExtArgs> | null
	}

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: 'ReadUncommitted'
		ReadCommitted: 'ReadCommitted'
		RepeatableRead: 'RepeatableRead'
		Serializable: 'Serializable'
	}

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

	export const UserScalarFieldEnum: {
		id: 'id'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
		email: 'email'
		name: 'name'
		password: 'password'
		age: 'age'
		gender: 'gender'
		dateOfBirth: 'dateOfBirth'
		role: 'role'
	}

	export type UserScalarFieldEnum =
		(typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

	export const ApplicationScalarFieldEnum: {
		id: 'id'
		createdAt: 'createdAt'
		updatedAt: 'updatedAt'
		releaseDate: 'releaseDate'
		name: 'name'
		description: 'description'
		steamId: 'steamId'
		rating: 'rating'
		size: 'size'
		isModding: 'isModding'
		developerId: 'developerId'
		publisherId: 'publisherId'
		minReqCpu: 'minReqCpu'
		minReqGpu: 'minReqGpu'
		minReqRam: 'minReqRam'
		minReqOs: 'minReqOs'
		minReqSize: 'minReqSize'
		minReqAdd: 'minReqAdd'
		recReqCpu: 'recReqCpu'
		recReqGpu: 'recReqGpu'
		recReqRam: 'recReqRam'
		recReqOs: 'recReqOs'
		recReqSize: 'recReqSize'
		recReqAdd: 'recReqAdd'
	}

	export type ApplicationScalarFieldEnum =
		(typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]

	export const GenerScalarFieldEnum: {
		id: 'id'
		name: 'name'
		slug: 'slug'
	}

	export type GenerScalarFieldEnum =
		(typeof GenerScalarFieldEnum)[keyof typeof GenerScalarFieldEnum]

	export const DeveloperScalarFieldEnum: {
		id: 'id'
		name: 'name'
	}

	export type DeveloperScalarFieldEnum =
		(typeof DeveloperScalarFieldEnum)[keyof typeof DeveloperScalarFieldEnum]

	export const PublisherScalarFieldEnum: {
		id: 'id'
		name: 'name'
	}

	export type PublisherScalarFieldEnum =
		(typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum]

	export const FileScalarFieldEnum: {
		id: 'id'
		createdAt: 'createdAt'
		title: 'title'
		alt: 'alt'
		caption: 'caption'
		path: 'path'
		mimeType: 'mimeType'
	}

	export type FileScalarFieldEnum =
		(typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]

	export const SortOrder: {
		asc: 'asc'
		desc: 'desc'
	}

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

	export const QueryMode: {
		default: 'default'
		insensitive: 'insensitive'
	}

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

	export const NullsOrder: {
		first: 'first'
		last: 'last'
	}

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Int'
	>

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Int[]'
	>

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'DateTime'
	>

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'DateTime[]'
	>

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'String'
	>

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'String[]'
	>

	/**
	 * Reference to a field of type 'Role'
	 */
	export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Role'
	>

	/**
	 * Reference to a field of type 'Role[]'
	 */
	export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Role[]'
	>

	/**
	 * Reference to a field of type 'Boolean'
	 */
	export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Boolean'
	>

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Float'
	>

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'Float[]'
	>

	/**
	 * Deep Input Types
	 */

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[]
		OR?: UserWhereInput[]
		NOT?: UserWhereInput | UserWhereInput[]
		id?: IntFilter<'User'> | number
		createdAt?: DateTimeFilter<'User'> | Date | string
		updatedAt?: DateTimeFilter<'User'> | Date | string
		email?: StringFilter<'User'> | string
		name?: StringNullableFilter<'User'> | string | null
		password?: StringFilter<'User'> | string
		age?: IntNullableFilter<'User'> | number | null
		gender?: StringNullableFilter<'User'> | string | null
		dateOfBirth?: DateTimeNullableFilter<'User'> | Date | string | null
		role?: EnumRoleFilter<'User'> | $Enums.Role
	}

	export type UserOrderByWithRelationInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		email?: SortOrder
		name?: SortOrderInput | SortOrder
		password?: SortOrder
		age?: SortOrderInput | SortOrder
		gender?: SortOrderInput | SortOrder
		dateOfBirth?: SortOrderInput | SortOrder
		role?: SortOrder
	}

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number
			email?: string
			AND?: UserWhereInput | UserWhereInput[]
			OR?: UserWhereInput[]
			NOT?: UserWhereInput | UserWhereInput[]
			createdAt?: DateTimeFilter<'User'> | Date | string
			updatedAt?: DateTimeFilter<'User'> | Date | string
			name?: StringNullableFilter<'User'> | string | null
			password?: StringFilter<'User'> | string
			age?: IntNullableFilter<'User'> | number | null
			gender?: StringNullableFilter<'User'> | string | null
			dateOfBirth?: DateTimeNullableFilter<'User'> | Date | string | null
			role?: EnumRoleFilter<'User'> | $Enums.Role
		},
		'id' | 'email'
	>

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		email?: SortOrder
		name?: SortOrderInput | SortOrder
		password?: SortOrder
		age?: SortOrderInput | SortOrder
		gender?: SortOrderInput | SortOrder
		dateOfBirth?: SortOrderInput | SortOrder
		role?: SortOrder
		_count?: UserCountOrderByAggregateInput
		_avg?: UserAvgOrderByAggregateInput
		_max?: UserMaxOrderByAggregateInput
		_min?: UserMinOrderByAggregateInput
		_sum?: UserSumOrderByAggregateInput
	}

	export type UserScalarWhereWithAggregatesInput = {
		AND?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[]
		OR?: UserScalarWhereWithAggregatesInput[]
		NOT?:
			| UserScalarWhereWithAggregatesInput
			| UserScalarWhereWithAggregatesInput[]
		id?: IntWithAggregatesFilter<'User'> | number
		createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
		email?: StringWithAggregatesFilter<'User'> | string
		name?: StringNullableWithAggregatesFilter<'User'> | string | null
		password?: StringWithAggregatesFilter<'User'> | string
		age?: IntNullableWithAggregatesFilter<'User'> | number | null
		gender?: StringNullableWithAggregatesFilter<'User'> | string | null
		dateOfBirth?:
			| DateTimeNullableWithAggregatesFilter<'User'>
			| Date
			| string
			| null
		role?: EnumRoleWithAggregatesFilter<'User'> | $Enums.Role
	}

	export type ApplicationWhereInput = {
		AND?: ApplicationWhereInput | ApplicationWhereInput[]
		OR?: ApplicationWhereInput[]
		NOT?: ApplicationWhereInput | ApplicationWhereInput[]
		id?: IntFilter<'Application'> | number
		createdAt?: DateTimeFilter<'Application'> | Date | string
		updatedAt?: DateTimeFilter<'Application'> | Date | string
		releaseDate?: DateTimeFilter<'Application'> | Date | string
		name?: StringFilter<'Application'> | string
		description?: StringFilter<'Application'> | string
		steamId?: IntNullableFilter<'Application'> | number | null
		rating?: IntFilter<'Application'> | number
		size?: IntNullableFilter<'Application'> | number | null
		isModding?: BoolFilter<'Application'> | boolean
		developerId?: IntNullableFilter<'Application'> | number | null
		publisherId?: IntNullableFilter<'Application'> | number | null
		minReqCpu?: StringNullableFilter<'Application'> | string | null
		minReqGpu?: StringNullableFilter<'Application'> | string | null
		minReqRam?: StringNullableFilter<'Application'> | string | null
		minReqOs?: StringNullableFilter<'Application'> | string | null
		minReqSize?: StringNullableFilter<'Application'> | string | null
		minReqAdd?: StringNullableFilter<'Application'> | string | null
		recReqCpu?: StringNullableFilter<'Application'> | string | null
		recReqGpu?: StringNullableFilter<'Application'> | string | null
		recReqRam?: StringNullableFilter<'Application'> | string | null
		recReqOs?: StringNullableFilter<'Application'> | string | null
		recReqSize?: StringNullableFilter<'Application'> | string | null
		recReqAdd?: StringNullableFilter<'Application'> | string | null
		geners?: GenerListRelationFilter
		developer?: XOR<DeveloperNullableRelationFilter, DeveloperWhereInput> | null
		publisher?: XOR<PublisherNullableRelationFilter, PublisherWhereInput> | null
	}

	export type ApplicationOrderByWithRelationInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		releaseDate?: SortOrder
		name?: SortOrder
		description?: SortOrder
		steamId?: SortOrderInput | SortOrder
		rating?: SortOrder
		size?: SortOrderInput | SortOrder
		isModding?: SortOrder
		developerId?: SortOrderInput | SortOrder
		publisherId?: SortOrderInput | SortOrder
		minReqCpu?: SortOrderInput | SortOrder
		minReqGpu?: SortOrderInput | SortOrder
		minReqRam?: SortOrderInput | SortOrder
		minReqOs?: SortOrderInput | SortOrder
		minReqSize?: SortOrderInput | SortOrder
		minReqAdd?: SortOrderInput | SortOrder
		recReqCpu?: SortOrderInput | SortOrder
		recReqGpu?: SortOrderInput | SortOrder
		recReqRam?: SortOrderInput | SortOrder
		recReqOs?: SortOrderInput | SortOrder
		recReqSize?: SortOrderInput | SortOrder
		recReqAdd?: SortOrderInput | SortOrder
		geners?: GenerOrderByRelationAggregateInput
		developer?: DeveloperOrderByWithRelationInput
		publisher?: PublisherOrderByWithRelationInput
	}

	export type ApplicationWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number
			AND?: ApplicationWhereInput | ApplicationWhereInput[]
			OR?: ApplicationWhereInput[]
			NOT?: ApplicationWhereInput | ApplicationWhereInput[]
			createdAt?: DateTimeFilter<'Application'> | Date | string
			updatedAt?: DateTimeFilter<'Application'> | Date | string
			releaseDate?: DateTimeFilter<'Application'> | Date | string
			name?: StringFilter<'Application'> | string
			description?: StringFilter<'Application'> | string
			steamId?: IntNullableFilter<'Application'> | number | null
			rating?: IntFilter<'Application'> | number
			size?: IntNullableFilter<'Application'> | number | null
			isModding?: BoolFilter<'Application'> | boolean
			developerId?: IntNullableFilter<'Application'> | number | null
			publisherId?: IntNullableFilter<'Application'> | number | null
			minReqCpu?: StringNullableFilter<'Application'> | string | null
			minReqGpu?: StringNullableFilter<'Application'> | string | null
			minReqRam?: StringNullableFilter<'Application'> | string | null
			minReqOs?: StringNullableFilter<'Application'> | string | null
			minReqSize?: StringNullableFilter<'Application'> | string | null
			minReqAdd?: StringNullableFilter<'Application'> | string | null
			recReqCpu?: StringNullableFilter<'Application'> | string | null
			recReqGpu?: StringNullableFilter<'Application'> | string | null
			recReqRam?: StringNullableFilter<'Application'> | string | null
			recReqOs?: StringNullableFilter<'Application'> | string | null
			recReqSize?: StringNullableFilter<'Application'> | string | null
			recReqAdd?: StringNullableFilter<'Application'> | string | null
			geners?: GenerListRelationFilter
			developer?: XOR<
				DeveloperNullableRelationFilter,
				DeveloperWhereInput
			> | null
			publisher?: XOR<
				PublisherNullableRelationFilter,
				PublisherWhereInput
			> | null
		},
		'id'
	>

	export type ApplicationOrderByWithAggregationInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		releaseDate?: SortOrder
		name?: SortOrder
		description?: SortOrder
		steamId?: SortOrderInput | SortOrder
		rating?: SortOrder
		size?: SortOrderInput | SortOrder
		isModding?: SortOrder
		developerId?: SortOrderInput | SortOrder
		publisherId?: SortOrderInput | SortOrder
		minReqCpu?: SortOrderInput | SortOrder
		minReqGpu?: SortOrderInput | SortOrder
		minReqRam?: SortOrderInput | SortOrder
		minReqOs?: SortOrderInput | SortOrder
		minReqSize?: SortOrderInput | SortOrder
		minReqAdd?: SortOrderInput | SortOrder
		recReqCpu?: SortOrderInput | SortOrder
		recReqGpu?: SortOrderInput | SortOrder
		recReqRam?: SortOrderInput | SortOrder
		recReqOs?: SortOrderInput | SortOrder
		recReqSize?: SortOrderInput | SortOrder
		recReqAdd?: SortOrderInput | SortOrder
		_count?: ApplicationCountOrderByAggregateInput
		_avg?: ApplicationAvgOrderByAggregateInput
		_max?: ApplicationMaxOrderByAggregateInput
		_min?: ApplicationMinOrderByAggregateInput
		_sum?: ApplicationSumOrderByAggregateInput
	}

	export type ApplicationScalarWhereWithAggregatesInput = {
		AND?:
			| ApplicationScalarWhereWithAggregatesInput
			| ApplicationScalarWhereWithAggregatesInput[]
		OR?: ApplicationScalarWhereWithAggregatesInput[]
		NOT?:
			| ApplicationScalarWhereWithAggregatesInput
			| ApplicationScalarWhereWithAggregatesInput[]
		id?: IntWithAggregatesFilter<'Application'> | number
		createdAt?: DateTimeWithAggregatesFilter<'Application'> | Date | string
		updatedAt?: DateTimeWithAggregatesFilter<'Application'> | Date | string
		releaseDate?: DateTimeWithAggregatesFilter<'Application'> | Date | string
		name?: StringWithAggregatesFilter<'Application'> | string
		description?: StringWithAggregatesFilter<'Application'> | string
		steamId?: IntNullableWithAggregatesFilter<'Application'> | number | null
		rating?: IntWithAggregatesFilter<'Application'> | number
		size?: IntNullableWithAggregatesFilter<'Application'> | number | null
		isModding?: BoolWithAggregatesFilter<'Application'> | boolean
		developerId?: IntNullableWithAggregatesFilter<'Application'> | number | null
		publisherId?: IntNullableWithAggregatesFilter<'Application'> | number | null
		minReqCpu?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		minReqGpu?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		minReqRam?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		minReqOs?: StringNullableWithAggregatesFilter<'Application'> | string | null
		minReqSize?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		minReqAdd?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		recReqCpu?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		recReqGpu?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		recReqRam?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		recReqOs?: StringNullableWithAggregatesFilter<'Application'> | string | null
		recReqSize?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
		recReqAdd?:
			| StringNullableWithAggregatesFilter<'Application'>
			| string
			| null
	}

	export type GenerWhereInput = {
		AND?: GenerWhereInput | GenerWhereInput[]
		OR?: GenerWhereInput[]
		NOT?: GenerWhereInput | GenerWhereInput[]
		id?: IntFilter<'Gener'> | number
		name?: StringFilter<'Gener'> | string
		slug?: StringFilter<'Gener'> | string
		applications?: ApplicationListRelationFilter
	}

	export type GenerOrderByWithRelationInput = {
		id?: SortOrder
		name?: SortOrder
		slug?: SortOrder
		applications?: ApplicationOrderByRelationAggregateInput
	}

	export type GenerWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number
			AND?: GenerWhereInput | GenerWhereInput[]
			OR?: GenerWhereInput[]
			NOT?: GenerWhereInput | GenerWhereInput[]
			name?: StringFilter<'Gener'> | string
			slug?: StringFilter<'Gener'> | string
			applications?: ApplicationListRelationFilter
		},
		'id'
	>

	export type GenerOrderByWithAggregationInput = {
		id?: SortOrder
		name?: SortOrder
		slug?: SortOrder
		_count?: GenerCountOrderByAggregateInput
		_avg?: GenerAvgOrderByAggregateInput
		_max?: GenerMaxOrderByAggregateInput
		_min?: GenerMinOrderByAggregateInput
		_sum?: GenerSumOrderByAggregateInput
	}

	export type GenerScalarWhereWithAggregatesInput = {
		AND?:
			| GenerScalarWhereWithAggregatesInput
			| GenerScalarWhereWithAggregatesInput[]
		OR?: GenerScalarWhereWithAggregatesInput[]
		NOT?:
			| GenerScalarWhereWithAggregatesInput
			| GenerScalarWhereWithAggregatesInput[]
		id?: IntWithAggregatesFilter<'Gener'> | number
		name?: StringWithAggregatesFilter<'Gener'> | string
		slug?: StringWithAggregatesFilter<'Gener'> | string
	}

	export type DeveloperWhereInput = {
		AND?: DeveloperWhereInput | DeveloperWhereInput[]
		OR?: DeveloperWhereInput[]
		NOT?: DeveloperWhereInput | DeveloperWhereInput[]
		id?: IntFilter<'Developer'> | number
		name?: StringFilter<'Developer'> | string
		applications?: ApplicationListRelationFilter
	}

	export type DeveloperOrderByWithRelationInput = {
		id?: SortOrder
		name?: SortOrder
		applications?: ApplicationOrderByRelationAggregateInput
	}

	export type DeveloperWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number
			AND?: DeveloperWhereInput | DeveloperWhereInput[]
			OR?: DeveloperWhereInput[]
			NOT?: DeveloperWhereInput | DeveloperWhereInput[]
			name?: StringFilter<'Developer'> | string
			applications?: ApplicationListRelationFilter
		},
		'id'
	>

	export type DeveloperOrderByWithAggregationInput = {
		id?: SortOrder
		name?: SortOrder
		_count?: DeveloperCountOrderByAggregateInput
		_avg?: DeveloperAvgOrderByAggregateInput
		_max?: DeveloperMaxOrderByAggregateInput
		_min?: DeveloperMinOrderByAggregateInput
		_sum?: DeveloperSumOrderByAggregateInput
	}

	export type DeveloperScalarWhereWithAggregatesInput = {
		AND?:
			| DeveloperScalarWhereWithAggregatesInput
			| DeveloperScalarWhereWithAggregatesInput[]
		OR?: DeveloperScalarWhereWithAggregatesInput[]
		NOT?:
			| DeveloperScalarWhereWithAggregatesInput
			| DeveloperScalarWhereWithAggregatesInput[]
		id?: IntWithAggregatesFilter<'Developer'> | number
		name?: StringWithAggregatesFilter<'Developer'> | string
	}

	export type PublisherWhereInput = {
		AND?: PublisherWhereInput | PublisherWhereInput[]
		OR?: PublisherWhereInput[]
		NOT?: PublisherWhereInput | PublisherWhereInput[]
		id?: IntFilter<'Publisher'> | number
		name?: StringFilter<'Publisher'> | string
		applications?: ApplicationListRelationFilter
	}

	export type PublisherOrderByWithRelationInput = {
		id?: SortOrder
		name?: SortOrder
		applications?: ApplicationOrderByRelationAggregateInput
	}

	export type PublisherWhereUniqueInput = Prisma.AtLeast<
		{
			id?: number
			AND?: PublisherWhereInput | PublisherWhereInput[]
			OR?: PublisherWhereInput[]
			NOT?: PublisherWhereInput | PublisherWhereInput[]
			name?: StringFilter<'Publisher'> | string
			applications?: ApplicationListRelationFilter
		},
		'id'
	>

	export type PublisherOrderByWithAggregationInput = {
		id?: SortOrder
		name?: SortOrder
		_count?: PublisherCountOrderByAggregateInput
		_avg?: PublisherAvgOrderByAggregateInput
		_max?: PublisherMaxOrderByAggregateInput
		_min?: PublisherMinOrderByAggregateInput
		_sum?: PublisherSumOrderByAggregateInput
	}

	export type PublisherScalarWhereWithAggregatesInput = {
		AND?:
			| PublisherScalarWhereWithAggregatesInput
			| PublisherScalarWhereWithAggregatesInput[]
		OR?: PublisherScalarWhereWithAggregatesInput[]
		NOT?:
			| PublisherScalarWhereWithAggregatesInput
			| PublisherScalarWhereWithAggregatesInput[]
		id?: IntWithAggregatesFilter<'Publisher'> | number
		name?: StringWithAggregatesFilter<'Publisher'> | string
	}

	export type FileWhereInput = {
		AND?: FileWhereInput | FileWhereInput[]
		OR?: FileWhereInput[]
		NOT?: FileWhereInput | FileWhereInput[]
		id?: StringFilter<'File'> | string
		createdAt?: DateTimeFilter<'File'> | Date | string
		title?: StringNullableFilter<'File'> | string | null
		alt?: StringNullableFilter<'File'> | string | null
		caption?: StringNullableFilter<'File'> | string | null
		path?: StringFilter<'File'> | string
		mimeType?: StringNullableFilter<'File'> | string | null
	}

	export type FileOrderByWithRelationInput = {
		id?: SortOrder
		createdAt?: SortOrder
		title?: SortOrderInput | SortOrder
		alt?: SortOrderInput | SortOrder
		caption?: SortOrderInput | SortOrder
		path?: SortOrder
		mimeType?: SortOrderInput | SortOrder
	}

	export type FileWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string
			AND?: FileWhereInput | FileWhereInput[]
			OR?: FileWhereInput[]
			NOT?: FileWhereInput | FileWhereInput[]
			createdAt?: DateTimeFilter<'File'> | Date | string
			title?: StringNullableFilter<'File'> | string | null
			alt?: StringNullableFilter<'File'> | string | null
			caption?: StringNullableFilter<'File'> | string | null
			path?: StringFilter<'File'> | string
			mimeType?: StringNullableFilter<'File'> | string | null
		},
		'id'
	>

	export type FileOrderByWithAggregationInput = {
		id?: SortOrder
		createdAt?: SortOrder
		title?: SortOrderInput | SortOrder
		alt?: SortOrderInput | SortOrder
		caption?: SortOrderInput | SortOrder
		path?: SortOrder
		mimeType?: SortOrderInput | SortOrder
		_count?: FileCountOrderByAggregateInput
		_max?: FileMaxOrderByAggregateInput
		_min?: FileMinOrderByAggregateInput
	}

	export type FileScalarWhereWithAggregatesInput = {
		AND?:
			| FileScalarWhereWithAggregatesInput
			| FileScalarWhereWithAggregatesInput[]
		OR?: FileScalarWhereWithAggregatesInput[]
		NOT?:
			| FileScalarWhereWithAggregatesInput
			| FileScalarWhereWithAggregatesInput[]
		id?: StringWithAggregatesFilter<'File'> | string
		createdAt?: DateTimeWithAggregatesFilter<'File'> | Date | string
		title?: StringNullableWithAggregatesFilter<'File'> | string | null
		alt?: StringNullableWithAggregatesFilter<'File'> | string | null
		caption?: StringNullableWithAggregatesFilter<'File'> | string | null
		path?: StringWithAggregatesFilter<'File'> | string
		mimeType?: StringNullableWithAggregatesFilter<'File'> | string | null
	}

	export type UserCreateInput = {
		createdAt?: Date | string
		updatedAt?: Date | string
		email: string
		name?: string | null
		password: string
		age?: number | null
		gender?: string | null
		dateOfBirth?: Date | string | null
		role?: $Enums.Role
	}

	export type UserUncheckedCreateInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		email: string
		name?: string | null
		password: string
		age?: number | null
		gender?: string | null
		dateOfBirth?: Date | string | null
		role?: $Enums.Role
	}

	export type UserUpdateInput = {
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		email?: StringFieldUpdateOperationsInput | string
		name?: NullableStringFieldUpdateOperationsInput | string | null
		password?: StringFieldUpdateOperationsInput | string
		age?: NullableIntFieldUpdateOperationsInput | number | null
		gender?: NullableStringFieldUpdateOperationsInput | string | null
		dateOfBirth?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
	}

	export type UserUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		email?: StringFieldUpdateOperationsInput | string
		name?: NullableStringFieldUpdateOperationsInput | string | null
		password?: StringFieldUpdateOperationsInput | string
		age?: NullableIntFieldUpdateOperationsInput | number | null
		gender?: NullableStringFieldUpdateOperationsInput | string | null
		dateOfBirth?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
	}

	export type UserCreateManyInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		email: string
		name?: string | null
		password: string
		age?: number | null
		gender?: string | null
		dateOfBirth?: Date | string | null
		role?: $Enums.Role
	}

	export type UserUpdateManyMutationInput = {
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		email?: StringFieldUpdateOperationsInput | string
		name?: NullableStringFieldUpdateOperationsInput | string | null
		password?: StringFieldUpdateOperationsInput | string
		age?: NullableIntFieldUpdateOperationsInput | number | null
		gender?: NullableStringFieldUpdateOperationsInput | string | null
		dateOfBirth?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
	}

	export type UserUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		email?: StringFieldUpdateOperationsInput | string
		name?: NullableStringFieldUpdateOperationsInput | string | null
		password?: StringFieldUpdateOperationsInput | string
		age?: NullableIntFieldUpdateOperationsInput | number | null
		gender?: NullableStringFieldUpdateOperationsInput | string | null
		dateOfBirth?:
			| NullableDateTimeFieldUpdateOperationsInput
			| Date
			| string
			| null
		role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
	}

	export type ApplicationCreateInput = {
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
		geners?: GenerCreateNestedManyWithoutApplicationsInput
		developer?: DeveloperCreateNestedOneWithoutApplicationsInput
		publisher?: PublisherCreateNestedOneWithoutApplicationsInput
	}

	export type ApplicationUncheckedCreateInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		developerId?: number | null
		publisherId?: number | null
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
		geners?: GenerUncheckedCreateNestedManyWithoutApplicationsInput
	}

	export type ApplicationUpdateInput = {
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		geners?: GenerUpdateManyWithoutApplicationsNestedInput
		developer?: DeveloperUpdateOneWithoutApplicationsNestedInput
		publisher?: PublisherUpdateOneWithoutApplicationsNestedInput
	}

	export type ApplicationUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		developerId?: NullableIntFieldUpdateOperationsInput | number | null
		publisherId?: NullableIntFieldUpdateOperationsInput | number | null
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		geners?: GenerUncheckedUpdateManyWithoutApplicationsNestedInput
	}

	export type ApplicationCreateManyInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		developerId?: number | null
		publisherId?: number | null
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
	}

	export type ApplicationUpdateManyMutationInput = {
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type ApplicationUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		developerId?: NullableIntFieldUpdateOperationsInput | number | null
		publisherId?: NullableIntFieldUpdateOperationsInput | number | null
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type GenerCreateInput = {
		name: string
		slug: string
		applications?: ApplicationCreateNestedManyWithoutGenersInput
	}

	export type GenerUncheckedCreateInput = {
		id?: number
		name: string
		slug: string
		applications?: ApplicationUncheckedCreateNestedManyWithoutGenersInput
	}

	export type GenerUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string
		slug?: StringFieldUpdateOperationsInput | string
		applications?: ApplicationUpdateManyWithoutGenersNestedInput
	}

	export type GenerUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
		slug?: StringFieldUpdateOperationsInput | string
		applications?: ApplicationUncheckedUpdateManyWithoutGenersNestedInput
	}

	export type GenerCreateManyInput = {
		id?: number
		name: string
		slug: string
	}

	export type GenerUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string
		slug?: StringFieldUpdateOperationsInput | string
	}

	export type GenerUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
		slug?: StringFieldUpdateOperationsInput | string
	}

	export type DeveloperCreateInput = {
		name: string
		applications?: ApplicationCreateNestedManyWithoutDeveloperInput
	}

	export type DeveloperUncheckedCreateInput = {
		id?: number
		name: string
		applications?: ApplicationUncheckedCreateNestedManyWithoutDeveloperInput
	}

	export type DeveloperUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string
		applications?: ApplicationUpdateManyWithoutDeveloperNestedInput
	}

	export type DeveloperUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
		applications?: ApplicationUncheckedUpdateManyWithoutDeveloperNestedInput
	}

	export type DeveloperCreateManyInput = {
		id?: number
		name: string
	}

	export type DeveloperUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string
	}

	export type DeveloperUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
	}

	export type PublisherCreateInput = {
		name: string
		applications?: ApplicationCreateNestedManyWithoutPublisherInput
	}

	export type PublisherUncheckedCreateInput = {
		id?: number
		name: string
		applications?: ApplicationUncheckedCreateNestedManyWithoutPublisherInput
	}

	export type PublisherUpdateInput = {
		name?: StringFieldUpdateOperationsInput | string
		applications?: ApplicationUpdateManyWithoutPublisherNestedInput
	}

	export type PublisherUncheckedUpdateInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
		applications?: ApplicationUncheckedUpdateManyWithoutPublisherNestedInput
	}

	export type PublisherCreateManyInput = {
		id?: number
		name: string
	}

	export type PublisherUpdateManyMutationInput = {
		name?: StringFieldUpdateOperationsInput | string
	}

	export type PublisherUncheckedUpdateManyInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
	}

	export type FileCreateInput = {
		id?: string
		createdAt?: Date | string
		title?: string | null
		alt?: string | null
		caption?: string | null
		path: string
		mimeType?: string | null
	}

	export type FileUncheckedCreateInput = {
		id?: string
		createdAt?: Date | string
		title?: string | null
		alt?: string | null
		caption?: string | null
		path: string
		mimeType?: string | null
	}

	export type FileUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		title?: NullableStringFieldUpdateOperationsInput | string | null
		alt?: NullableStringFieldUpdateOperationsInput | string | null
		caption?: NullableStringFieldUpdateOperationsInput | string | null
		path?: StringFieldUpdateOperationsInput | string
		mimeType?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type FileUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		title?: NullableStringFieldUpdateOperationsInput | string | null
		alt?: NullableStringFieldUpdateOperationsInput | string | null
		caption?: NullableStringFieldUpdateOperationsInput | string | null
		path?: StringFieldUpdateOperationsInput | string
		mimeType?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type FileCreateManyInput = {
		id?: string
		createdAt?: Date | string
		title?: string | null
		alt?: string | null
		caption?: string | null
		path: string
		mimeType?: string | null
	}

	export type FileUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		title?: NullableStringFieldUpdateOperationsInput | string | null
		alt?: NullableStringFieldUpdateOperationsInput | string | null
		caption?: NullableStringFieldUpdateOperationsInput | string | null
		path?: StringFieldUpdateOperationsInput | string
		mimeType?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type FileUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		title?: NullableStringFieldUpdateOperationsInput | string | null
		alt?: NullableStringFieldUpdateOperationsInput | string | null
		caption?: NullableStringFieldUpdateOperationsInput | string | null
		path?: StringFieldUpdateOperationsInput | string
		mimeType?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type IntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>
		in?: number[] | ListIntFieldRefInput<$PrismaModel>
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntFilter<$PrismaModel> | number
	}

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string
	}

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[] | ListStringFieldRefInput<$PrismaModel>
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		mode?: QueryMode
		not?: NestedStringFilter<$PrismaModel> | string
	}

	export type StringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		mode?: QueryMode
		not?: NestedStringNullableFilter<$PrismaModel> | string | null
	}

	export type IntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableFilter<$PrismaModel> | number | null
	}

	export type DateTimeNullableFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
	}

	export type EnumRoleFilter<$PrismaModel = never> = {
		equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
		in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
		notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
		not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
	}

	export type SortOrderInput = {
		sort: SortOrder
		nulls?: NullsOrder
	}

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		email?: SortOrder
		name?: SortOrder
		password?: SortOrder
		age?: SortOrder
		gender?: SortOrder
		dateOfBirth?: SortOrder
		role?: SortOrder
	}

	export type UserAvgOrderByAggregateInput = {
		id?: SortOrder
		age?: SortOrder
	}

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		email?: SortOrder
		name?: SortOrder
		password?: SortOrder
		age?: SortOrder
		gender?: SortOrder
		dateOfBirth?: SortOrder
		role?: SortOrder
	}

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		email?: SortOrder
		name?: SortOrder
		password?: SortOrder
		age?: SortOrder
		gender?: SortOrder
		dateOfBirth?: SortOrder
		role?: SortOrder
	}

	export type UserSumOrderByAggregateInput = {
		id?: SortOrder
		age?: SortOrder
	}

	export type IntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>
		in?: number[] | ListIntFieldRefInput<$PrismaModel>
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
		_count?: NestedIntFilter<$PrismaModel>
		_avg?: NestedFloatFilter<$PrismaModel>
		_sum?: NestedIntFilter<$PrismaModel>
		_min?: NestedIntFilter<$PrismaModel>
		_max?: NestedIntFilter<$PrismaModel>
	}

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedDateTimeFilter<$PrismaModel>
		_max?: NestedDateTimeFilter<$PrismaModel>
	}

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[] | ListStringFieldRefInput<$PrismaModel>
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		mode?: QueryMode
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedStringFilter<$PrismaModel>
		_max?: NestedStringFilter<$PrismaModel>
	}

	export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		mode?: QueryMode
		not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedStringNullableFilter<$PrismaModel>
		_max?: NestedStringNullableFilter<$PrismaModel>
	}

	export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_avg?: NestedFloatNullableFilter<$PrismaModel>
		_sum?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedIntNullableFilter<$PrismaModel>
		_max?: NestedIntNullableFilter<$PrismaModel>
	}

	export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?:
			| NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
			| Date
			| string
			| null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedDateTimeNullableFilter<$PrismaModel>
		_max?: NestedDateTimeNullableFilter<$PrismaModel>
	}

	export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
		in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
		notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
		not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedEnumRoleFilter<$PrismaModel>
		_max?: NestedEnumRoleFilter<$PrismaModel>
	}

	export type BoolFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>
		not?: NestedBoolFilter<$PrismaModel> | boolean
	}

	export type GenerListRelationFilter = {
		every?: GenerWhereInput
		some?: GenerWhereInput
		none?: GenerWhereInput
	}

	export type DeveloperNullableRelationFilter = {
		is?: DeveloperWhereInput | null
		isNot?: DeveloperWhereInput | null
	}

	export type PublisherNullableRelationFilter = {
		is?: PublisherWhereInput | null
		isNot?: PublisherWhereInput | null
	}

	export type GenerOrderByRelationAggregateInput = {
		_count?: SortOrder
	}

	export type ApplicationCountOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		releaseDate?: SortOrder
		name?: SortOrder
		description?: SortOrder
		steamId?: SortOrder
		rating?: SortOrder
		size?: SortOrder
		isModding?: SortOrder
		developerId?: SortOrder
		publisherId?: SortOrder
		minReqCpu?: SortOrder
		minReqGpu?: SortOrder
		minReqRam?: SortOrder
		minReqOs?: SortOrder
		minReqSize?: SortOrder
		minReqAdd?: SortOrder
		recReqCpu?: SortOrder
		recReqGpu?: SortOrder
		recReqRam?: SortOrder
		recReqOs?: SortOrder
		recReqSize?: SortOrder
		recReqAdd?: SortOrder
	}

	export type ApplicationAvgOrderByAggregateInput = {
		id?: SortOrder
		steamId?: SortOrder
		rating?: SortOrder
		size?: SortOrder
		developerId?: SortOrder
		publisherId?: SortOrder
	}

	export type ApplicationMaxOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		releaseDate?: SortOrder
		name?: SortOrder
		description?: SortOrder
		steamId?: SortOrder
		rating?: SortOrder
		size?: SortOrder
		isModding?: SortOrder
		developerId?: SortOrder
		publisherId?: SortOrder
		minReqCpu?: SortOrder
		minReqGpu?: SortOrder
		minReqRam?: SortOrder
		minReqOs?: SortOrder
		minReqSize?: SortOrder
		minReqAdd?: SortOrder
		recReqCpu?: SortOrder
		recReqGpu?: SortOrder
		recReqRam?: SortOrder
		recReqOs?: SortOrder
		recReqSize?: SortOrder
		recReqAdd?: SortOrder
	}

	export type ApplicationMinOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		updatedAt?: SortOrder
		releaseDate?: SortOrder
		name?: SortOrder
		description?: SortOrder
		steamId?: SortOrder
		rating?: SortOrder
		size?: SortOrder
		isModding?: SortOrder
		developerId?: SortOrder
		publisherId?: SortOrder
		minReqCpu?: SortOrder
		minReqGpu?: SortOrder
		minReqRam?: SortOrder
		minReqOs?: SortOrder
		minReqSize?: SortOrder
		minReqAdd?: SortOrder
		recReqCpu?: SortOrder
		recReqGpu?: SortOrder
		recReqRam?: SortOrder
		recReqOs?: SortOrder
		recReqSize?: SortOrder
		recReqAdd?: SortOrder
	}

	export type ApplicationSumOrderByAggregateInput = {
		id?: SortOrder
		steamId?: SortOrder
		rating?: SortOrder
		size?: SortOrder
		developerId?: SortOrder
		publisherId?: SortOrder
	}

	export type BoolWithAggregatesFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedBoolFilter<$PrismaModel>
		_max?: NestedBoolFilter<$PrismaModel>
	}

	export type ApplicationListRelationFilter = {
		every?: ApplicationWhereInput
		some?: ApplicationWhereInput
		none?: ApplicationWhereInput
	}

	export type ApplicationOrderByRelationAggregateInput = {
		_count?: SortOrder
	}

	export type GenerCountOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
		slug?: SortOrder
	}

	export type GenerAvgOrderByAggregateInput = {
		id?: SortOrder
	}

	export type GenerMaxOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
		slug?: SortOrder
	}

	export type GenerMinOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
		slug?: SortOrder
	}

	export type GenerSumOrderByAggregateInput = {
		id?: SortOrder
	}

	export type DeveloperCountOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
	}

	export type DeveloperAvgOrderByAggregateInput = {
		id?: SortOrder
	}

	export type DeveloperMaxOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
	}

	export type DeveloperMinOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
	}

	export type DeveloperSumOrderByAggregateInput = {
		id?: SortOrder
	}

	export type PublisherCountOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
	}

	export type PublisherAvgOrderByAggregateInput = {
		id?: SortOrder
	}

	export type PublisherMaxOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
	}

	export type PublisherMinOrderByAggregateInput = {
		id?: SortOrder
		name?: SortOrder
	}

	export type PublisherSumOrderByAggregateInput = {
		id?: SortOrder
	}

	export type FileCountOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		title?: SortOrder
		alt?: SortOrder
		caption?: SortOrder
		path?: SortOrder
		mimeType?: SortOrder
	}

	export type FileMaxOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		title?: SortOrder
		alt?: SortOrder
		caption?: SortOrder
		path?: SortOrder
		mimeType?: SortOrder
	}

	export type FileMinOrderByAggregateInput = {
		id?: SortOrder
		createdAt?: SortOrder
		title?: SortOrder
		alt?: SortOrder
		caption?: SortOrder
		path?: SortOrder
		mimeType?: SortOrder
	}

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string
	}

	export type StringFieldUpdateOperationsInput = {
		set?: string
	}

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null
	}

	export type NullableIntFieldUpdateOperationsInput = {
		set?: number | null
		increment?: number
		decrement?: number
		multiply?: number
		divide?: number
	}

	export type NullableDateTimeFieldUpdateOperationsInput = {
		set?: Date | string | null
	}

	export type EnumRoleFieldUpdateOperationsInput = {
		set?: $Enums.Role
	}

	export type IntFieldUpdateOperationsInput = {
		set?: number
		increment?: number
		decrement?: number
		multiply?: number
		divide?: number
	}

	export type GenerCreateNestedManyWithoutApplicationsInput = {
		create?:
			| XOR<
					GenerCreateWithoutApplicationsInput,
					GenerUncheckedCreateWithoutApplicationsInput
			  >
			| GenerCreateWithoutApplicationsInput[]
			| GenerUncheckedCreateWithoutApplicationsInput[]
		connectOrCreate?:
			| GenerCreateOrConnectWithoutApplicationsInput
			| GenerCreateOrConnectWithoutApplicationsInput[]
		connect?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
	}

	export type DeveloperCreateNestedOneWithoutApplicationsInput = {
		create?: XOR<
			DeveloperCreateWithoutApplicationsInput,
			DeveloperUncheckedCreateWithoutApplicationsInput
		>
		connectOrCreate?: DeveloperCreateOrConnectWithoutApplicationsInput
		connect?: DeveloperWhereUniqueInput
	}

	export type PublisherCreateNestedOneWithoutApplicationsInput = {
		create?: XOR<
			PublisherCreateWithoutApplicationsInput,
			PublisherUncheckedCreateWithoutApplicationsInput
		>
		connectOrCreate?: PublisherCreateOrConnectWithoutApplicationsInput
		connect?: PublisherWhereUniqueInput
	}

	export type GenerUncheckedCreateNestedManyWithoutApplicationsInput = {
		create?:
			| XOR<
					GenerCreateWithoutApplicationsInput,
					GenerUncheckedCreateWithoutApplicationsInput
			  >
			| GenerCreateWithoutApplicationsInput[]
			| GenerUncheckedCreateWithoutApplicationsInput[]
		connectOrCreate?:
			| GenerCreateOrConnectWithoutApplicationsInput
			| GenerCreateOrConnectWithoutApplicationsInput[]
		connect?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
	}

	export type BoolFieldUpdateOperationsInput = {
		set?: boolean
	}

	export type GenerUpdateManyWithoutApplicationsNestedInput = {
		create?:
			| XOR<
					GenerCreateWithoutApplicationsInput,
					GenerUncheckedCreateWithoutApplicationsInput
			  >
			| GenerCreateWithoutApplicationsInput[]
			| GenerUncheckedCreateWithoutApplicationsInput[]
		connectOrCreate?:
			| GenerCreateOrConnectWithoutApplicationsInput
			| GenerCreateOrConnectWithoutApplicationsInput[]
		upsert?:
			| GenerUpsertWithWhereUniqueWithoutApplicationsInput
			| GenerUpsertWithWhereUniqueWithoutApplicationsInput[]
		set?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
		disconnect?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
		delete?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
		connect?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
		update?:
			| GenerUpdateWithWhereUniqueWithoutApplicationsInput
			| GenerUpdateWithWhereUniqueWithoutApplicationsInput[]
		updateMany?:
			| GenerUpdateManyWithWhereWithoutApplicationsInput
			| GenerUpdateManyWithWhereWithoutApplicationsInput[]
		deleteMany?: GenerScalarWhereInput | GenerScalarWhereInput[]
	}

	export type DeveloperUpdateOneWithoutApplicationsNestedInput = {
		create?: XOR<
			DeveloperCreateWithoutApplicationsInput,
			DeveloperUncheckedCreateWithoutApplicationsInput
		>
		connectOrCreate?: DeveloperCreateOrConnectWithoutApplicationsInput
		upsert?: DeveloperUpsertWithoutApplicationsInput
		disconnect?: DeveloperWhereInput | boolean
		delete?: DeveloperWhereInput | boolean
		connect?: DeveloperWhereUniqueInput
		update?: XOR<
			XOR<
				DeveloperUpdateToOneWithWhereWithoutApplicationsInput,
				DeveloperUpdateWithoutApplicationsInput
			>,
			DeveloperUncheckedUpdateWithoutApplicationsInput
		>
	}

	export type PublisherUpdateOneWithoutApplicationsNestedInput = {
		create?: XOR<
			PublisherCreateWithoutApplicationsInput,
			PublisherUncheckedCreateWithoutApplicationsInput
		>
		connectOrCreate?: PublisherCreateOrConnectWithoutApplicationsInput
		upsert?: PublisherUpsertWithoutApplicationsInput
		disconnect?: PublisherWhereInput | boolean
		delete?: PublisherWhereInput | boolean
		connect?: PublisherWhereUniqueInput
		update?: XOR<
			XOR<
				PublisherUpdateToOneWithWhereWithoutApplicationsInput,
				PublisherUpdateWithoutApplicationsInput
			>,
			PublisherUncheckedUpdateWithoutApplicationsInput
		>
	}

	export type GenerUncheckedUpdateManyWithoutApplicationsNestedInput = {
		create?:
			| XOR<
					GenerCreateWithoutApplicationsInput,
					GenerUncheckedCreateWithoutApplicationsInput
			  >
			| GenerCreateWithoutApplicationsInput[]
			| GenerUncheckedCreateWithoutApplicationsInput[]
		connectOrCreate?:
			| GenerCreateOrConnectWithoutApplicationsInput
			| GenerCreateOrConnectWithoutApplicationsInput[]
		upsert?:
			| GenerUpsertWithWhereUniqueWithoutApplicationsInput
			| GenerUpsertWithWhereUniqueWithoutApplicationsInput[]
		set?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
		disconnect?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
		delete?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
		connect?: GenerWhereUniqueInput | GenerWhereUniqueInput[]
		update?:
			| GenerUpdateWithWhereUniqueWithoutApplicationsInput
			| GenerUpdateWithWhereUniqueWithoutApplicationsInput[]
		updateMany?:
			| GenerUpdateManyWithWhereWithoutApplicationsInput
			| GenerUpdateManyWithWhereWithoutApplicationsInput[]
		deleteMany?: GenerScalarWhereInput | GenerScalarWhereInput[]
	}

	export type ApplicationCreateNestedManyWithoutGenersInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutGenersInput,
					ApplicationUncheckedCreateWithoutGenersInput
			  >
			| ApplicationCreateWithoutGenersInput[]
			| ApplicationUncheckedCreateWithoutGenersInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutGenersInput
			| ApplicationCreateOrConnectWithoutGenersInput[]
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
	}

	export type ApplicationUncheckedCreateNestedManyWithoutGenersInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutGenersInput,
					ApplicationUncheckedCreateWithoutGenersInput
			  >
			| ApplicationCreateWithoutGenersInput[]
			| ApplicationUncheckedCreateWithoutGenersInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutGenersInput
			| ApplicationCreateOrConnectWithoutGenersInput[]
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
	}

	export type ApplicationUpdateManyWithoutGenersNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutGenersInput,
					ApplicationUncheckedCreateWithoutGenersInput
			  >
			| ApplicationCreateWithoutGenersInput[]
			| ApplicationUncheckedCreateWithoutGenersInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutGenersInput
			| ApplicationCreateOrConnectWithoutGenersInput[]
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutGenersInput
			| ApplicationUpsertWithWhereUniqueWithoutGenersInput[]
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutGenersInput
			| ApplicationUpdateWithWhereUniqueWithoutGenersInput[]
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutGenersInput
			| ApplicationUpdateManyWithWhereWithoutGenersInput[]
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
	}

	export type ApplicationUncheckedUpdateManyWithoutGenersNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutGenersInput,
					ApplicationUncheckedCreateWithoutGenersInput
			  >
			| ApplicationCreateWithoutGenersInput[]
			| ApplicationUncheckedCreateWithoutGenersInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutGenersInput
			| ApplicationCreateOrConnectWithoutGenersInput[]
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutGenersInput
			| ApplicationUpsertWithWhereUniqueWithoutGenersInput[]
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutGenersInput
			| ApplicationUpdateWithWhereUniqueWithoutGenersInput[]
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutGenersInput
			| ApplicationUpdateManyWithWhereWithoutGenersInput[]
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
	}

	export type ApplicationCreateNestedManyWithoutDeveloperInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutDeveloperInput,
					ApplicationUncheckedCreateWithoutDeveloperInput
			  >
			| ApplicationCreateWithoutDeveloperInput[]
			| ApplicationUncheckedCreateWithoutDeveloperInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutDeveloperInput
			| ApplicationCreateOrConnectWithoutDeveloperInput[]
		createMany?: ApplicationCreateManyDeveloperInputEnvelope
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
	}

	export type ApplicationUncheckedCreateNestedManyWithoutDeveloperInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutDeveloperInput,
					ApplicationUncheckedCreateWithoutDeveloperInput
			  >
			| ApplicationCreateWithoutDeveloperInput[]
			| ApplicationUncheckedCreateWithoutDeveloperInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutDeveloperInput
			| ApplicationCreateOrConnectWithoutDeveloperInput[]
		createMany?: ApplicationCreateManyDeveloperInputEnvelope
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
	}

	export type ApplicationUpdateManyWithoutDeveloperNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutDeveloperInput,
					ApplicationUncheckedCreateWithoutDeveloperInput
			  >
			| ApplicationCreateWithoutDeveloperInput[]
			| ApplicationUncheckedCreateWithoutDeveloperInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutDeveloperInput
			| ApplicationCreateOrConnectWithoutDeveloperInput[]
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutDeveloperInput
			| ApplicationUpsertWithWhereUniqueWithoutDeveloperInput[]
		createMany?: ApplicationCreateManyDeveloperInputEnvelope
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutDeveloperInput
			| ApplicationUpdateWithWhereUniqueWithoutDeveloperInput[]
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutDeveloperInput
			| ApplicationUpdateManyWithWhereWithoutDeveloperInput[]
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
	}

	export type ApplicationUncheckedUpdateManyWithoutDeveloperNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutDeveloperInput,
					ApplicationUncheckedCreateWithoutDeveloperInput
			  >
			| ApplicationCreateWithoutDeveloperInput[]
			| ApplicationUncheckedCreateWithoutDeveloperInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutDeveloperInput
			| ApplicationCreateOrConnectWithoutDeveloperInput[]
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutDeveloperInput
			| ApplicationUpsertWithWhereUniqueWithoutDeveloperInput[]
		createMany?: ApplicationCreateManyDeveloperInputEnvelope
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutDeveloperInput
			| ApplicationUpdateWithWhereUniqueWithoutDeveloperInput[]
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutDeveloperInput
			| ApplicationUpdateManyWithWhereWithoutDeveloperInput[]
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
	}

	export type ApplicationCreateNestedManyWithoutPublisherInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutPublisherInput,
					ApplicationUncheckedCreateWithoutPublisherInput
			  >
			| ApplicationCreateWithoutPublisherInput[]
			| ApplicationUncheckedCreateWithoutPublisherInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutPublisherInput
			| ApplicationCreateOrConnectWithoutPublisherInput[]
		createMany?: ApplicationCreateManyPublisherInputEnvelope
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
	}

	export type ApplicationUncheckedCreateNestedManyWithoutPublisherInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutPublisherInput,
					ApplicationUncheckedCreateWithoutPublisherInput
			  >
			| ApplicationCreateWithoutPublisherInput[]
			| ApplicationUncheckedCreateWithoutPublisherInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutPublisherInput
			| ApplicationCreateOrConnectWithoutPublisherInput[]
		createMany?: ApplicationCreateManyPublisherInputEnvelope
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
	}

	export type ApplicationUpdateManyWithoutPublisherNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutPublisherInput,
					ApplicationUncheckedCreateWithoutPublisherInput
			  >
			| ApplicationCreateWithoutPublisherInput[]
			| ApplicationUncheckedCreateWithoutPublisherInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutPublisherInput
			| ApplicationCreateOrConnectWithoutPublisherInput[]
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutPublisherInput
			| ApplicationUpsertWithWhereUniqueWithoutPublisherInput[]
		createMany?: ApplicationCreateManyPublisherInputEnvelope
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutPublisherInput
			| ApplicationUpdateWithWhereUniqueWithoutPublisherInput[]
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutPublisherInput
			| ApplicationUpdateManyWithWhereWithoutPublisherInput[]
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
	}

	export type ApplicationUncheckedUpdateManyWithoutPublisherNestedInput = {
		create?:
			| XOR<
					ApplicationCreateWithoutPublisherInput,
					ApplicationUncheckedCreateWithoutPublisherInput
			  >
			| ApplicationCreateWithoutPublisherInput[]
			| ApplicationUncheckedCreateWithoutPublisherInput[]
		connectOrCreate?:
			| ApplicationCreateOrConnectWithoutPublisherInput
			| ApplicationCreateOrConnectWithoutPublisherInput[]
		upsert?:
			| ApplicationUpsertWithWhereUniqueWithoutPublisherInput
			| ApplicationUpsertWithWhereUniqueWithoutPublisherInput[]
		createMany?: ApplicationCreateManyPublisherInputEnvelope
		set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
		update?:
			| ApplicationUpdateWithWhereUniqueWithoutPublisherInput
			| ApplicationUpdateWithWhereUniqueWithoutPublisherInput[]
		updateMany?:
			| ApplicationUpdateManyWithWhereWithoutPublisherInput
			| ApplicationUpdateManyWithWhereWithoutPublisherInput[]
		deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
	}

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>
		in?: number[] | ListIntFieldRefInput<$PrismaModel>
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntFilter<$PrismaModel> | number
	}

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string
	}

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[] | ListStringFieldRefInput<$PrismaModel>
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringFilter<$PrismaModel> | string
	}

	export type NestedStringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringNullableFilter<$PrismaModel> | string | null
	}

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableFilter<$PrismaModel> | number | null
	}

	export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
	}

	export type NestedEnumRoleFilter<$PrismaModel = never> = {
		equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
		in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
		notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
		not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
	}

	export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>
		in?: number[] | ListIntFieldRefInput<$PrismaModel>
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
		_count?: NestedIntFilter<$PrismaModel>
		_avg?: NestedFloatFilter<$PrismaModel>
		_sum?: NestedIntFilter<$PrismaModel>
		_min?: NestedIntFilter<$PrismaModel>
		_max?: NestedIntFilter<$PrismaModel>
	}

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
		lt?: number | FloatFieldRefInput<$PrismaModel>
		lte?: number | FloatFieldRefInput<$PrismaModel>
		gt?: number | FloatFieldRefInput<$PrismaModel>
		gte?: number | FloatFieldRefInput<$PrismaModel>
		not?: NestedFloatFilter<$PrismaModel> | number
	}

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedDateTimeFilter<$PrismaModel>
		_max?: NestedDateTimeFilter<$PrismaModel>
	}

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>
		in?: string[] | ListStringFieldRefInput<$PrismaModel>
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedStringFilter<$PrismaModel>
		_max?: NestedStringFilter<$PrismaModel>
	}

	export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
		lt?: string | StringFieldRefInput<$PrismaModel>
		lte?: string | StringFieldRefInput<$PrismaModel>
		gt?: string | StringFieldRefInput<$PrismaModel>
		gte?: string | StringFieldRefInput<$PrismaModel>
		contains?: string | StringFieldRefInput<$PrismaModel>
		startsWith?: string | StringFieldRefInput<$PrismaModel>
		endsWith?: string | StringFieldRefInput<$PrismaModel>
		not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedStringNullableFilter<$PrismaModel>
		_max?: NestedStringNullableFilter<$PrismaModel>
	}

	export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
		lt?: number | IntFieldRefInput<$PrismaModel>
		lte?: number | IntFieldRefInput<$PrismaModel>
		gt?: number | IntFieldRefInput<$PrismaModel>
		gte?: number | IntFieldRefInput<$PrismaModel>
		not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
		_count?: NestedIntNullableFilter<$PrismaModel>
		_avg?: NestedFloatNullableFilter<$PrismaModel>
		_sum?: NestedIntNullableFilter<$PrismaModel>
		_min?: NestedIntNullableFilter<$PrismaModel>
		_max?: NestedIntNullableFilter<$PrismaModel>
	}

	export type NestedFloatNullableFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel> | null
		in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
		lt?: number | FloatFieldRefInput<$PrismaModel>
		lte?: number | FloatFieldRefInput<$PrismaModel>
		gt?: number | FloatFieldRefInput<$PrismaModel>
		gte?: number | FloatFieldRefInput<$PrismaModel>
		not?: NestedFloatNullableFilter<$PrismaModel> | number | null
	}

	export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
		{
			equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
			in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
			notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
			lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
			lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
			gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
			gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
			not?:
				| NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
				| Date
				| string
				| null
			_count?: NestedIntNullableFilter<$PrismaModel>
			_min?: NestedDateTimeNullableFilter<$PrismaModel>
			_max?: NestedDateTimeNullableFilter<$PrismaModel>
		}

	export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
		equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
		in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
		notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
		not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedEnumRoleFilter<$PrismaModel>
		_max?: NestedEnumRoleFilter<$PrismaModel>
	}

	export type NestedBoolFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>
		not?: NestedBoolFilter<$PrismaModel> | boolean
	}

	export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
		equals?: boolean | BooleanFieldRefInput<$PrismaModel>
		not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
		_count?: NestedIntFilter<$PrismaModel>
		_min?: NestedBoolFilter<$PrismaModel>
		_max?: NestedBoolFilter<$PrismaModel>
	}

	export type GenerCreateWithoutApplicationsInput = {
		name: string
		slug: string
	}

	export type GenerUncheckedCreateWithoutApplicationsInput = {
		id?: number
		name: string
		slug: string
	}

	export type GenerCreateOrConnectWithoutApplicationsInput = {
		where: GenerWhereUniqueInput
		create: XOR<
			GenerCreateWithoutApplicationsInput,
			GenerUncheckedCreateWithoutApplicationsInput
		>
	}

	export type DeveloperCreateWithoutApplicationsInput = {
		name: string
	}

	export type DeveloperUncheckedCreateWithoutApplicationsInput = {
		id?: number
		name: string
	}

	export type DeveloperCreateOrConnectWithoutApplicationsInput = {
		where: DeveloperWhereUniqueInput
		create: XOR<
			DeveloperCreateWithoutApplicationsInput,
			DeveloperUncheckedCreateWithoutApplicationsInput
		>
	}

	export type PublisherCreateWithoutApplicationsInput = {
		name: string
	}

	export type PublisherUncheckedCreateWithoutApplicationsInput = {
		id?: number
		name: string
	}

	export type PublisherCreateOrConnectWithoutApplicationsInput = {
		where: PublisherWhereUniqueInput
		create: XOR<
			PublisherCreateWithoutApplicationsInput,
			PublisherUncheckedCreateWithoutApplicationsInput
		>
	}

	export type GenerUpsertWithWhereUniqueWithoutApplicationsInput = {
		where: GenerWhereUniqueInput
		update: XOR<
			GenerUpdateWithoutApplicationsInput,
			GenerUncheckedUpdateWithoutApplicationsInput
		>
		create: XOR<
			GenerCreateWithoutApplicationsInput,
			GenerUncheckedCreateWithoutApplicationsInput
		>
	}

	export type GenerUpdateWithWhereUniqueWithoutApplicationsInput = {
		where: GenerWhereUniqueInput
		data: XOR<
			GenerUpdateWithoutApplicationsInput,
			GenerUncheckedUpdateWithoutApplicationsInput
		>
	}

	export type GenerUpdateManyWithWhereWithoutApplicationsInput = {
		where: GenerScalarWhereInput
		data: XOR<
			GenerUpdateManyMutationInput,
			GenerUncheckedUpdateManyWithoutApplicationsInput
		>
	}

	export type GenerScalarWhereInput = {
		AND?: GenerScalarWhereInput | GenerScalarWhereInput[]
		OR?: GenerScalarWhereInput[]
		NOT?: GenerScalarWhereInput | GenerScalarWhereInput[]
		id?: IntFilter<'Gener'> | number
		name?: StringFilter<'Gener'> | string
		slug?: StringFilter<'Gener'> | string
	}

	export type DeveloperUpsertWithoutApplicationsInput = {
		update: XOR<
			DeveloperUpdateWithoutApplicationsInput,
			DeveloperUncheckedUpdateWithoutApplicationsInput
		>
		create: XOR<
			DeveloperCreateWithoutApplicationsInput,
			DeveloperUncheckedCreateWithoutApplicationsInput
		>
		where?: DeveloperWhereInput
	}

	export type DeveloperUpdateToOneWithWhereWithoutApplicationsInput = {
		where?: DeveloperWhereInput
		data: XOR<
			DeveloperUpdateWithoutApplicationsInput,
			DeveloperUncheckedUpdateWithoutApplicationsInput
		>
	}

	export type DeveloperUpdateWithoutApplicationsInput = {
		name?: StringFieldUpdateOperationsInput | string
	}

	export type DeveloperUncheckedUpdateWithoutApplicationsInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
	}

	export type PublisherUpsertWithoutApplicationsInput = {
		update: XOR<
			PublisherUpdateWithoutApplicationsInput,
			PublisherUncheckedUpdateWithoutApplicationsInput
		>
		create: XOR<
			PublisherCreateWithoutApplicationsInput,
			PublisherUncheckedCreateWithoutApplicationsInput
		>
		where?: PublisherWhereInput
	}

	export type PublisherUpdateToOneWithWhereWithoutApplicationsInput = {
		where?: PublisherWhereInput
		data: XOR<
			PublisherUpdateWithoutApplicationsInput,
			PublisherUncheckedUpdateWithoutApplicationsInput
		>
	}

	export type PublisherUpdateWithoutApplicationsInput = {
		name?: StringFieldUpdateOperationsInput | string
	}

	export type PublisherUncheckedUpdateWithoutApplicationsInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
	}

	export type ApplicationCreateWithoutGenersInput = {
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
		developer?: DeveloperCreateNestedOneWithoutApplicationsInput
		publisher?: PublisherCreateNestedOneWithoutApplicationsInput
	}

	export type ApplicationUncheckedCreateWithoutGenersInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		developerId?: number | null
		publisherId?: number | null
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
	}

	export type ApplicationCreateOrConnectWithoutGenersInput = {
		where: ApplicationWhereUniqueInput
		create: XOR<
			ApplicationCreateWithoutGenersInput,
			ApplicationUncheckedCreateWithoutGenersInput
		>
	}

	export type ApplicationUpsertWithWhereUniqueWithoutGenersInput = {
		where: ApplicationWhereUniqueInput
		update: XOR<
			ApplicationUpdateWithoutGenersInput,
			ApplicationUncheckedUpdateWithoutGenersInput
		>
		create: XOR<
			ApplicationCreateWithoutGenersInput,
			ApplicationUncheckedCreateWithoutGenersInput
		>
	}

	export type ApplicationUpdateWithWhereUniqueWithoutGenersInput = {
		where: ApplicationWhereUniqueInput
		data: XOR<
			ApplicationUpdateWithoutGenersInput,
			ApplicationUncheckedUpdateWithoutGenersInput
		>
	}

	export type ApplicationUpdateManyWithWhereWithoutGenersInput = {
		where: ApplicationScalarWhereInput
		data: XOR<
			ApplicationUpdateManyMutationInput,
			ApplicationUncheckedUpdateManyWithoutGenersInput
		>
	}

	export type ApplicationScalarWhereInput = {
		AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
		OR?: ApplicationScalarWhereInput[]
		NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
		id?: IntFilter<'Application'> | number
		createdAt?: DateTimeFilter<'Application'> | Date | string
		updatedAt?: DateTimeFilter<'Application'> | Date | string
		releaseDate?: DateTimeFilter<'Application'> | Date | string
		name?: StringFilter<'Application'> | string
		description?: StringFilter<'Application'> | string
		steamId?: IntNullableFilter<'Application'> | number | null
		rating?: IntFilter<'Application'> | number
		size?: IntNullableFilter<'Application'> | number | null
		isModding?: BoolFilter<'Application'> | boolean
		developerId?: IntNullableFilter<'Application'> | number | null
		publisherId?: IntNullableFilter<'Application'> | number | null
		minReqCpu?: StringNullableFilter<'Application'> | string | null
		minReqGpu?: StringNullableFilter<'Application'> | string | null
		minReqRam?: StringNullableFilter<'Application'> | string | null
		minReqOs?: StringNullableFilter<'Application'> | string | null
		minReqSize?: StringNullableFilter<'Application'> | string | null
		minReqAdd?: StringNullableFilter<'Application'> | string | null
		recReqCpu?: StringNullableFilter<'Application'> | string | null
		recReqGpu?: StringNullableFilter<'Application'> | string | null
		recReqRam?: StringNullableFilter<'Application'> | string | null
		recReqOs?: StringNullableFilter<'Application'> | string | null
		recReqSize?: StringNullableFilter<'Application'> | string | null
		recReqAdd?: StringNullableFilter<'Application'> | string | null
	}

	export type ApplicationCreateWithoutDeveloperInput = {
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
		geners?: GenerCreateNestedManyWithoutApplicationsInput
		publisher?: PublisherCreateNestedOneWithoutApplicationsInput
	}

	export type ApplicationUncheckedCreateWithoutDeveloperInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		publisherId?: number | null
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
		geners?: GenerUncheckedCreateNestedManyWithoutApplicationsInput
	}

	export type ApplicationCreateOrConnectWithoutDeveloperInput = {
		where: ApplicationWhereUniqueInput
		create: XOR<
			ApplicationCreateWithoutDeveloperInput,
			ApplicationUncheckedCreateWithoutDeveloperInput
		>
	}

	export type ApplicationCreateManyDeveloperInputEnvelope = {
		data:
			| ApplicationCreateManyDeveloperInput
			| ApplicationCreateManyDeveloperInput[]
		skipDuplicates?: boolean
	}

	export type ApplicationUpsertWithWhereUniqueWithoutDeveloperInput = {
		where: ApplicationWhereUniqueInput
		update: XOR<
			ApplicationUpdateWithoutDeveloperInput,
			ApplicationUncheckedUpdateWithoutDeveloperInput
		>
		create: XOR<
			ApplicationCreateWithoutDeveloperInput,
			ApplicationUncheckedCreateWithoutDeveloperInput
		>
	}

	export type ApplicationUpdateWithWhereUniqueWithoutDeveloperInput = {
		where: ApplicationWhereUniqueInput
		data: XOR<
			ApplicationUpdateWithoutDeveloperInput,
			ApplicationUncheckedUpdateWithoutDeveloperInput
		>
	}

	export type ApplicationUpdateManyWithWhereWithoutDeveloperInput = {
		where: ApplicationScalarWhereInput
		data: XOR<
			ApplicationUpdateManyMutationInput,
			ApplicationUncheckedUpdateManyWithoutDeveloperInput
		>
	}

	export type ApplicationCreateWithoutPublisherInput = {
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
		geners?: GenerCreateNestedManyWithoutApplicationsInput
		developer?: DeveloperCreateNestedOneWithoutApplicationsInput
	}

	export type ApplicationUncheckedCreateWithoutPublisherInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		developerId?: number | null
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
		geners?: GenerUncheckedCreateNestedManyWithoutApplicationsInput
	}

	export type ApplicationCreateOrConnectWithoutPublisherInput = {
		where: ApplicationWhereUniqueInput
		create: XOR<
			ApplicationCreateWithoutPublisherInput,
			ApplicationUncheckedCreateWithoutPublisherInput
		>
	}

	export type ApplicationCreateManyPublisherInputEnvelope = {
		data:
			| ApplicationCreateManyPublisherInput
			| ApplicationCreateManyPublisherInput[]
		skipDuplicates?: boolean
	}

	export type ApplicationUpsertWithWhereUniqueWithoutPublisherInput = {
		where: ApplicationWhereUniqueInput
		update: XOR<
			ApplicationUpdateWithoutPublisherInput,
			ApplicationUncheckedUpdateWithoutPublisherInput
		>
		create: XOR<
			ApplicationCreateWithoutPublisherInput,
			ApplicationUncheckedCreateWithoutPublisherInput
		>
	}

	export type ApplicationUpdateWithWhereUniqueWithoutPublisherInput = {
		where: ApplicationWhereUniqueInput
		data: XOR<
			ApplicationUpdateWithoutPublisherInput,
			ApplicationUncheckedUpdateWithoutPublisherInput
		>
	}

	export type ApplicationUpdateManyWithWhereWithoutPublisherInput = {
		where: ApplicationScalarWhereInput
		data: XOR<
			ApplicationUpdateManyMutationInput,
			ApplicationUncheckedUpdateManyWithoutPublisherInput
		>
	}

	export type GenerUpdateWithoutApplicationsInput = {
		name?: StringFieldUpdateOperationsInput | string
		slug?: StringFieldUpdateOperationsInput | string
	}

	export type GenerUncheckedUpdateWithoutApplicationsInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
		slug?: StringFieldUpdateOperationsInput | string
	}

	export type GenerUncheckedUpdateManyWithoutApplicationsInput = {
		id?: IntFieldUpdateOperationsInput | number
		name?: StringFieldUpdateOperationsInput | string
		slug?: StringFieldUpdateOperationsInput | string
	}

	export type ApplicationUpdateWithoutGenersInput = {
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		developer?: DeveloperUpdateOneWithoutApplicationsNestedInput
		publisher?: PublisherUpdateOneWithoutApplicationsNestedInput
	}

	export type ApplicationUncheckedUpdateWithoutGenersInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		developerId?: NullableIntFieldUpdateOperationsInput | number | null
		publisherId?: NullableIntFieldUpdateOperationsInput | number | null
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type ApplicationUncheckedUpdateManyWithoutGenersInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		developerId?: NullableIntFieldUpdateOperationsInput | number | null
		publisherId?: NullableIntFieldUpdateOperationsInput | number | null
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type ApplicationCreateManyDeveloperInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		publisherId?: number | null
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
	}

	export type ApplicationUpdateWithoutDeveloperInput = {
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		geners?: GenerUpdateManyWithoutApplicationsNestedInput
		publisher?: PublisherUpdateOneWithoutApplicationsNestedInput
	}

	export type ApplicationUncheckedUpdateWithoutDeveloperInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		publisherId?: NullableIntFieldUpdateOperationsInput | number | null
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		geners?: GenerUncheckedUpdateManyWithoutApplicationsNestedInput
	}

	export type ApplicationUncheckedUpdateManyWithoutDeveloperInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		publisherId?: NullableIntFieldUpdateOperationsInput | number | null
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
	}

	export type ApplicationCreateManyPublisherInput = {
		id?: number
		createdAt?: Date | string
		updatedAt?: Date | string
		releaseDate?: Date | string
		name: string
		description: string
		steamId?: number | null
		rating?: number
		size?: number | null
		isModding?: boolean
		developerId?: number | null
		minReqCpu?: string | null
		minReqGpu?: string | null
		minReqRam?: string | null
		minReqOs?: string | null
		minReqSize?: string | null
		minReqAdd?: string | null
		recReqCpu?: string | null
		recReqGpu?: string | null
		recReqRam?: string | null
		recReqOs?: string | null
		recReqSize?: string | null
		recReqAdd?: string | null
	}

	export type ApplicationUpdateWithoutPublisherInput = {
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		geners?: GenerUpdateManyWithoutApplicationsNestedInput
		developer?: DeveloperUpdateOneWithoutApplicationsNestedInput
	}

	export type ApplicationUncheckedUpdateWithoutPublisherInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		developerId?: NullableIntFieldUpdateOperationsInput | number | null
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		geners?: GenerUncheckedUpdateManyWithoutApplicationsNestedInput
	}

	export type ApplicationUncheckedUpdateManyWithoutPublisherInput = {
		id?: IntFieldUpdateOperationsInput | number
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
		releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
		name?: StringFieldUpdateOperationsInput | string
		description?: StringFieldUpdateOperationsInput | string
		steamId?: NullableIntFieldUpdateOperationsInput | number | null
		rating?: IntFieldUpdateOperationsInput | number
		size?: NullableIntFieldUpdateOperationsInput | number | null
		isModding?: BoolFieldUpdateOperationsInput | boolean
		developerId?: NullableIntFieldUpdateOperationsInput | number | null
		minReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		minReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		minReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		minReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		minReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
		recReqCpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqGpu?: NullableStringFieldUpdateOperationsInput | string | null
		recReqRam?: NullableStringFieldUpdateOperationsInput | string | null
		recReqOs?: NullableStringFieldUpdateOperationsInput | string | null
		recReqSize?: NullableStringFieldUpdateOperationsInput | string | null
		recReqAdd?: NullableStringFieldUpdateOperationsInput | string | null
	}

	/**
	 * Aliases for legacy arg types
	 */
	/**
	 * @deprecated Use ApplicationCountOutputTypeDefaultArgs instead
	 */
	export type ApplicationCountOutputTypeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = ApplicationCountOutputTypeDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use GenerCountOutputTypeDefaultArgs instead
	 */
	export type GenerCountOutputTypeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = GenerCountOutputTypeDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use DeveloperCountOutputTypeDefaultArgs instead
	 */
	export type DeveloperCountOutputTypeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = DeveloperCountOutputTypeDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use PublisherCountOutputTypeDefaultArgs instead
	 */
	export type PublisherCountOutputTypeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = PublisherCountOutputTypeDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use UserDefaultArgs instead
	 */
	export type UserArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = UserDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use ApplicationDefaultArgs instead
	 */
	export type ApplicationArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = ApplicationDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use GenerDefaultArgs instead
	 */
	export type GenerArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = GenerDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use DeveloperDefaultArgs instead
	 */
	export type DeveloperArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = DeveloperDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use PublisherDefaultArgs instead
	 */
	export type PublisherArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = PublisherDefaultArgs<ExtArgs>
	/**
	 * @deprecated Use FileDefaultArgs instead
	 */
	export type FileArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
	> = FileDefaultArgs<ExtArgs>

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number
	}

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF
}
