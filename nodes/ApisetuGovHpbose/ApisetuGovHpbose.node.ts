import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovHpbose implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apisetu Gov Hpbose',
		name: 'N8nDevApisetuGovHpbose',
		icon: { light: 'file:./apisetu-gov-hpbose.svg', dark: 'file:./apisetu-gov-hpbose.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'HPBOSE Dharamshala issues Class X & XII provisional certificates (2012-18) for student download.',
		defaults: { name: 'Apisetu Gov Hpbose' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApisetuGovHpboseApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
		],
	};
}
