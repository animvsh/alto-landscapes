
import { FloorPlan } from '../types/FloorPlan';
import { studioPlans } from './studioPlans';
import { oneBedroomPlans } from './oneBedroomPlans';
import { twoBedroomPlans } from './twoBedroomPlans';

// Combine all plans for the featuredFloorPlans export
export const featuredFloorPlans: FloorPlan[] = [
  ...studioPlans,
  ...oneBedroomPlans,
  ...twoBedroomPlans
];

// Export individual plan collections
export { studioPlans, oneBedroomPlans, twoBedroomPlans };
