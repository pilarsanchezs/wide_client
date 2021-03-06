/**
 * events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface EventsGetScalarMetricDataResponse {
    /**
     * task scalar metric events
     */
    events?: Array<object>;
    /**
     * amount of events returned
     */
    returned?: number;
    /**
     * amount of events in task
     */
    total?: number;
    /**
     * Scroll ID of previous call (used for getting more results)
     */
    scroll_id?: string;
}
