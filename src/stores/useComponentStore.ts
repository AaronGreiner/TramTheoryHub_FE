import { defineStore } from 'pinia';
import { ref } from 'vue';
import HomeComponent from '../components/Home.vue';
import TestComponent from '../components/Test.vue';
import PracticeComponent from '../components/Practice.vue';
import ExamComponent from '../components/Exam.vue';

export const useComponentStore = defineStore('component', () => {
  const currentComponent = ref(HomeComponent);

  function switchComponent(componentName: string) {
    if (componentName === 'home') {
      currentComponent.value = HomeComponent;
    } else if (componentName === 'test') {
      currentComponent.value = TestComponent;
    } else if (componentName === 'practice') {
      currentComponent.value = PracticeComponent;
    } else if (componentName === 'exam') {
      currentComponent.value = ExamComponent;
    }
  }

  return { currentComponent, switchComponent };
});