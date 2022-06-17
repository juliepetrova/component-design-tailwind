<template>
  <div>
    <ui-title title="Accordion" class="text-white" />
    <ui-subtitle text="Always open accordion " class="text-white mt-5" />
    <ui-background-components
      classProps="bg-gradient-to-r from-teal-500 to-cyan-500 p-5"
    >
      <ui-accordion title="Terms and Conditions">
        <div>
          General terms and conditions are provisions set out in writing.
          Everything related to an agreement is arranged in them. This agreement
          can be concluded between various entrepreneurs or between
          entrepreneurs and customers. The terms and conditions can be about
          guarantees, liability, cooling-off periods, manners of payment or, for
          instance, how customers can make complaints. Once you have drawn up
          your terms and conditions, you do not have to go over them every time
          with customers.
        </div>
      </ui-accordion>
      <ui-accordion title="Company Rules">
        <div>
          Company rules and regulations mean a set of written policies made by
          the Company's higher level of authority and bound to follow all
          employees and stakeholders. Rules and regulations help the
          organization protect from legal claims and establish a positive work
          environment in the workplace.
        </div>
      </ui-accordion>
    </ui-background-components>

    <ui-subtitle text="Default accordion " class="text-white mt-5" />

    <ui-background-components
      classProps="bg-gradient-to-r from-teal-500 to-cyan-500 p-5"
    >
      <ui-main-accordion>
        <ui-accordion-collapsable title="Vegetarian Menu">
          <ul>
            <li>GRILLED SCALLOPS 'n PORK BELLY</li>
            <li>CHARRED SHRIMP TARTARE</li>
            <li>SMOKY CAPRESE</li>
          </ul>
        </ui-accordion-collapsable>
        <ui-accordion-collapsable title="Main meals">
          <ul>
            <li>GRILLED LAMB LOIN 1</li>
            <li>GRILLED DENVER STEAK</li>
            <li>MISO GLAZED CHICKEN</li>
          </ul>
        </ui-accordion-collapsable>
        <ui-accordion-collapsable title="Drinks">
          <ul>
            <li>Mojito</li>
            <li>Lemonade</li>
            <li>Water</li>
          </ul>
        </ui-accordion-collapsable>
      </ui-main-accordion>
    </ui-background-components>
  </div>
</template>

<script>
import UiAccordion from "../Shared/tailwind/accordions/UI-Accordion.vue";
import UiBackgroundComponents from "../components/UI-BackgroundComponents.vue";
import UiAccordionCollapsable from "../Shared/tailwind/accordions/UI-AccordionCollapsable.vue";
import UiMainAccordion from "../Shared/tailwind/accordions/UI-MainAccordion.vue";
import UiTitle from "../Shared/tailwind/headings/UI-Title.vue";
import UiSubtitle from "../Shared/tailwind/headings/UI-Subtitle.vue";

export default {
  components: {
    UiAccordion,
    UiBackgroundComponents,
    UiAccordionCollapsable,
    UiMainAccordion,
    UiTitle,
    UiSubtitle,
  },
};
</script>

<style></style>
