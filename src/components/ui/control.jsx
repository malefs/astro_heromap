
import {Card, Text, Metric, Flex, ProgressBar} from "@tremor/react";



export default function Control  = () => {
 <Card  className="max-w-xs mx-auto">
    <Text>Sales</Text>
    <Metric>$ 34,743</Metric>
  </Card>

	<Card className="max-w-xs mx-auto">
    <Text>Sales</Text>
    <Metric>$ 71,465</Metric>
    <Flex className="mt-4">
      <Text>32% of annual target</Text>
      <Text>$ 225,000</Text>
    </Flex>
    <ProgressBar value={100} className="mt-2" />
  </Card>
}