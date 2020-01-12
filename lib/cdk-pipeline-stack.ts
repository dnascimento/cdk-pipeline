import * as cdk from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3');

export class CdkPipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'bucket', {
      bucketName: "dario-bucket",
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
  }
}
