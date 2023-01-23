import About from "@/views/AboutView.vue";
import { test } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("About.vue", () => {
  test("Renders inner text", () => {
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toContain("about");
  });
});
