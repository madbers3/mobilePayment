import { MobileOperator } from './mobil-operator.model';

export const MOBILE_OPERATORS: MobileOperator[] = [
  {
    name: 'Beeline',
    logo: '/assets/images/beeline.svg',
    id: 1,
    codes: [900, 902, 903, 904, 905, 906, 908, 909, 950, 951, 953, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 980, 983, 986]
  },
  {
    name: 'MTS',
    logo: '/assets/images/mts.svg',
    id: 2,
    codes: [902, 904, 908, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 950, 978, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989]
  },
  {
    name: 'Megafon',
    logo: '/assets/images/megafon.svg',
    id: 3,
    codes: [902, 904, 908, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936, 937, 938, 939, 950, 999]
  }
];
