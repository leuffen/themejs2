

interface SomeType  {
  a: number;
  b: string;
}

class SomeClass {
  accessor wurst: string
}

type SomeClassType = InstanceType<typeof SomeClass>;


const a: SomeClassType = {
  wurst: 'test',
};


