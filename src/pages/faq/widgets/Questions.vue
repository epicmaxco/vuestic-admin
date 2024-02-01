<template>
  <VaCard class="mb-4">
    <VaCardContent>
      <h2 class="va-h5">Popular questions</h2>
      <VaAccordion v-model="accordionState" :style="{ '--va-collapse-padding': '1rem 0' }" class="mb-1">
        <VaCollapse header="How do I reload a page?">
          <article class="max-w-3xl leading-5">
            <p class="mb-2">
              Get ready for some page-refreshing wisdom! We're about to dive into the magical world of reloading web
              pages. Here are some techniques:
            </p>
            <ul class="list-disc list-inside leading-5 ml-4">
              <li>
                Press the F5 key or Ctrl + R (Windows/Linux) or Command + R (Mac) to manually reload the current page.
              </li>
              <li>
                Click the reload button in your browser. It usually looks like a circular arrow and is typically located
                in the address bar.
              </li>
              <li>Use JavaScript to reload the page programmatically: location.reload();</li>
            </ul>
          </article>
        </VaCollapse>

        <VaCollapse header="What is a Secure Key?">
          <article class="max-w-3xl text-sm">
            <p class="mb-4">
              A Secure Key is an extra layer of security that helps look after you and your money by generating a
              unique, single use security code every time you log on or authorise a payment. There are two types of
              Secure Key - a Digital version that works as part of the Mobile Banking App - perfect if you have a
              smartphone or tablet. Or, you can use a Physical version that is a little key ring that looks like a mini
              calculator.
            </p>
            <p class="mb-4">
              We recommend setting up a Digital Secure Key. It’s built into the first direct Banking App, and if you
              have the right type of smartphone you can use your fingerprint or face recognition to seamlessly log on or
              authorise payments.
            </p>
            <a class="va-link font-semibold" href="#"
              >Find out more about Secure Keys
              <VaIcon :size="18" name="chevron_right" />
            </a>
          </article>
        </VaCollapse>

        <VaCollapse header="How do I report fraud?">
          <article class="max-w-3xl text-sm">
            <p class="mb-3">
              Reporting fraud is a serious matter, and it's important to take appropriate steps to address and prevent
              fraudulent activities. The specific process for reporting fraud may vary based on your location and the
              nature of the fraud, but here's a general guide:
            </p>
            <ul class="list-disc list-inside leading-6 ml-4 mb-4">
              <li>
                <span class="font-semibold">Report to Relevant Authorities:</span> Depending on the nature of the fraud,
                you may need to report to other relevant authorities, such as the Securities and Exchange Commission
                (SEC) for investment-related fraud or the Better Business Bureau (BBB) for scams and deceptive
                practices.
              </li>
              <li>
                <span class="font-semibold">Document All Details:</span> Make sure to document all the relevant details
                about the fraud, including dates, times, names of individuals involved (if known), financial
                transactions, and any communication related to the fraud.
              </li>
              <li>
                <span class="font-semibold">Report to Internet Crime Organizations:</span> If the fraud involves online
                activities, consider reporting to organizations that deal with internet crimes, such as the Internet
                Crime Complaint Center (IC3). IC3 is a partnership between the FBI and the National White Collar Crime
                Center.
              </li>
            </ul>
            <p>
              Remember to act promptly and follow the specific reporting procedures relevant to your location and the
              type of fraud you've encountered. Taking swift action can help mitigate potential damage and prevent
              further fraudulent activities.
            </p>
          </article>
        </VaCollapse>

        <VaCollapse :style="{ '--va-background-border': 'transparent' }" header="How to download statements?">
          <article class="max-w-3xl text-sm">
            <p class="mb-3">
              Downloading statements can vary depending on the type of statements you're referring to (e.g., bank
              statements, credit card statements, utility statements). Below are general steps to download statements
              from various platforms:
            </p>
            <ul class="list-disc list-inside leading-6 ml-4 mb-4">
              <li>
                <span class="font-semibold">Ensure Secure Connection:</span> Always access and download statements from
                a secure and trusted network to protect your sensitive financial information.
              </li>
              <li>
                <span class="font-semibold">Regularly Check Statements:</span> Review your statements regularly to
                verify transactions, detect errors, or identify any suspicious activity promptly.
              </li>
              <li>
                <span class="font-semibold">Verify Account Details:</span> Ensure that the statements you download
                correspond to the correct account, including account numbers and account names.
              </li>
              <li>
                <span class="font-semibold">Use Official Channels:</span> Download statements only from official and
                authorized platforms, such as your bank's official website or the secure online portals of service
                providers.
              </li>
            </ul>
            <p>
              Always ensure that you follow the specific steps and instructions provided by the respective service
              provider to download statements securely and accurately. If you encounter any difficulties or have
              specific questions, consider reaching out to the customer support of the respective institution or
              service.
            </p>
          </article>
        </VaCollapse>
      </VaAccordion>
    </VaCardContent>
  </VaCard>
</template>

<script setup>
import { reactive } from 'vue'

const accordionState = reactive([false, true, false, false])
</script>
