/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Script } from '././script';
import { ConfigurationItem } from '././configurationItem';
import { ParamsItem } from '././paramsItem';
import { Execution } from '././execution';
import { TaskModels } from '././taskModels';
import { TaskTypeEnum } from '././taskTypeEnum';
import {Container} from '~/business-logic/model/tasks/container';


export interface TasksEditRequest {
    /**
     * ID of the task
     */
    task: string;
    /**
     * If not true, call fails if the task status is not \'created\'
     */
    force?: boolean;
    /**
     * Task name Unique within the company.
     */
    name?: string;
    /**
     * User-defined tags list
     */
    tags?: Array<string>;
    /**
     * System tags list. This field is reserved for system use, please don\'t use it.
     */
    system_tags?: Array<string>;
    type?: TaskTypeEnum;
    /**
     * Free text comment
     */
    comment?: string;
    /**
     * Parent task id Must be a completed task.
     */
    parent?: string;
    /**
     * Project ID of the project to which this task is assigned Must exist[ab]
     */
    project?: string;
    /**
     * Output storage id Must be a reference to an existing storage.
     */
    output_dest?: string;
    execution?: Execution;
    /**
     * Task hyper params per section
     */
    hyperparams?: { [key: string]: { [key: string]: ParamsItem; }; };
    /**
     * Task configuration params
     */
    configuration?: { [key: string]: ConfigurationItem; };
    script?: Script;
    models?: TaskModels;
    /**
     * Docker container parameters
     */
    container?: Container;
    /**
     * Task runtime mapping
     */
    runtime?: object;
}
