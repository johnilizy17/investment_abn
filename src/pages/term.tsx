import Navbar from "@/components/landingpage/LandingPageHeader";
import NoAuthLayout from "@/layout/DashboardLayout";
import { Box, Center, Heading, Separator, Text, VStack } from "@chakra-ui/react";

export default function InvestmentAgreement() {
    return (
        <NoAuthLayout title="Marektplace - Land Banking">
            <Navbar />
            <Box maxW="5xl"mx="auto" my={10} p={8}  mt="100px"  bg="white" borderRadius="lg" boxShadow="md">

                <Center mb={8} fontSize="2xl" lineHeight={"130%"} fontWeight="700" textAlign={"center"} color="blue.700">
                    ABN INVESTORS’ TERMS AND INVESTMENT <br />
                    AGREEMENT
                </Center>
                <VStack align="start" gap={5}>
                    <Heading as="h2" size="md" color="blue.700">
                        AB NARINOHS LTD (RC 7065785)
                    </Heading>
                    <Text>
                        THIS AGREEMENT is made between AB NARINOHS LTD (RC 7065785), a real estate and
                        investment company duly registered under the laws of the Federal Republic of Nigeria with its
                        principal office at 9 Okun-Ajah Complex, off Ogombo Abraham Adesanya Road, Ajah, Lagos
                        (“the Company” or “ABN”), and the undersigned investor (“the Investor”).
                    </Text>
                    <Text>
                        By subscribing to any ABN investment plan, purchasing shares, or making any form of investment
                        payment, the Investor acknowledges and agrees to be bound by the following Terms and Conditions.
                    </Text>

                    <Separator />

                    <Heading as="h3" size="md" color="blue.700">1. Purpose of Agreement</Heading>
                    <Text>
                        This Agreement governs the investment relationship between ABN and the Investor, establishing
                        the terms, conditions, rights, and obligations that apply to all investment products and
                        property-based share offerings conducted under the Company’s ABN Land-Dey and related
                        investment initiatives.
                    </Text>

                    <Heading as="h3" size="md" color="blue.700">2. Nature of Investment</Heading>
                    <Text>a. ABN operates a real estate-backed investment model where investors purchase units or shares in land-based portfolios managed and developed by the Company.</Text>
                    <Text>b. Each investment represents a fractional participation in the Company’s property development projects and does not confer ownership, title, or direct claim to any specific parcel of land unless expressly stated in a separate deed or allocation document.</Text>
                    <Text>c. All investments are pooled, managed, and reinvested solely at the discretion of ABN in accordance with its business strategy and prevailing market conditions.</Text>

                    <Heading as="h3" size="md" color="blue.700">3. Investment Plans and Returns</Heading>
                    <Text>a. Investors may select from the following options:</Text>
                    <Text>• 12-Month Plan: 20% Return on Investment (ROI) upon maturity.</Text>
                    <Text>• 24-Month Plan: 30% Return on Investment (ROI) upon maturity.</Text>
                    <Text>b. ROI accrues only after the completion of the agreed investment tenure.</Text>
                    <Text>c. Early withdrawal or termination by the Investor before maturity attracts a 15% administrative deduction and may forfeit any accrued ROI.</Text>
                    <Text>d. ROI shall be paid through any ABN-approved payment channel within 30 to 60 working days after maturity, subject to Company cash flow and policy updates.</Text>

                    <Heading as="h3" size="md" color="blue.700">4. Investment Unit and Valuation</Heading>
                    <Text>a. Each property portfolio is divided into standardized units of shares determined by ABN and priced according to market value and development stage.</Text>
                    <Text>b. ABN reserves the sole right to review, adjust, or revalue investment units or property prices as deemed necessary, with or without prior notice to investors.</Text>

                    <Heading as="h3" size="md" color="blue.700">5. Payment Terms</Heading>
                    <Text>a. All payments shall be made through ABN’s approved payment systems as displayed on https://pay.abn.com.ng.</Text>
                    <Text>b. Investors must retain proof of payment for all transactions.</Text>
                    <Text>c. Failure to make a due payment or renewal within 30 days of the due date may result in forfeiture, suspension, or reclassification of the investor’s portfolio at the Company’s discretion.</Text>

                    <Heading as="h3" size="md" color="blue.700">6. Risk Disclosure and Limitation of Liability</Heading>
                    <Text>a. The Investor understands that all investments carry inherent business, regulatory, and financial risks, and that returns are projected estimates based on prevailing market conditions, not fixed guarantees.</Text>
                    <Text>b. ABN shall not be liable for any delay or variation in ROI or principal repayment resulting from unforeseen economic conditions, policy changes, regulatory restrictions, natural disasters, financial crises, or other force majeure events.</Text>
                    <Text>c. In the event of market downturns, economic recession, or liquidity challenges, ABN reserves the right to defer, restructure, or convert ROI or principal into alternative benefits such as land value equivalence or future credit facilities.</Text>
                    <Text>d. The Investor hereby indemnifies ABN against any claim, loss, or damage arising from investment delays, market instability, or external regulatory actions.</Text>

                    <Heading as="h3" size="md" color="blue.700">7. Extension and Adjustment Clause</Heading>
                    <Text>
                        ABN reserves the absolute right to extend payment timelines, restructure ROI schedules, modify
                        interest rates, or alter any part of this Agreement when deemed necessary to preserve financial
                        stability, operational continuity, or investor collective benefit. Such actions shall not constitute a
                        breach of contract and shall be binding upon all investors.
                    </Text>

                    <Heading as="h3" size="md" color="blue.700">8. Refund and Exit Policy</Heading>
                    <Text>a. Refund requests must be made in writing and may take between 30 to 60 working days to process.</Text>
                    <Text>b. All refunds are subject to a 15% deduction to cover administrative and operational costs.</Text>
                    <Text>c. The Investor may alternatively transfer their investment to a new investor, subject to ABN’s approval and proper documentation.</Text>
                    <Text>d. Registration and entry fees are strictly non-refundable.</Text>

                    <Heading as="h3" size="md" color="blue.700">9. Confidentiality and Non-Disclosure</Heading>
                    <Text>a. Investors acknowledge that information received from ABN regarding its business model, market strategy, and investment structure constitutes proprietary and confidential data.</Text>
                    <Text>b. Investors shall not disclose, reproduce, or share such information without written consent from ABN.</Text>
                    <Text>c. Breach of confidentiality may result in termination of investment rights, forfeiture of ROI, and legal action.</Text>

                    <Heading as="h3" size="md" color="blue.700">10. Investor’s Representations and Warranties</Heading>
                    <Text>a. All funds invested are legitimate and not derived from any unlawful activity.</Text>
                    <Text>b. The Investor has read, understood, and accepted all terms and policies of ABN.</Text>
                    <Text>c. The Investor is financially capable of undertaking the risks associated with real estate-backed investments.</Text>
                    <Text>d. The Investor shall not misrepresent ABN’s investment model or use the Company’s name for unauthorized promotions or fundraising.</Text>

                    <Heading as="h3" size="md" color="blue.700">11. Dispute Resolution</Heading>
                    <Text>a. Any dispute, controversy, or claim arising out of this Agreement shall first be resolved through mutual consultation.</Text>
                    <Text>b. Where resolution fails, the matter shall be submitted to arbitration in Abuja, Nigeria, under the Arbitration and Conciliation Act.</Text>
                    <Text>c. The arbitral decision shall be final and binding upon both parties.</Text>

                    <Heading as="h3" size="md" color="blue.700">12. Modification and Policy Rights</Heading>
                    <Text>
                        ABN reserves the unrestricted right to review, amend, suspend, or modify any clause of this
                        Agreement, including ROI structure, timelines, fees, or procedural requirements, with or without
                        prior notice or consent from investors. Continued participation constitutes acceptance of such
                        modifications.
                    </Text>

                    <Heading as="h3" size="md" color="blue.700">13. Governing Law</Heading>
                    <Text>
                        This Agreement shall be governed and construed in accordance with the laws of the Federal
                        Republic of Nigeria, and subject to the jurisdiction of the courts located within Abuja.
                    </Text>

                    <Heading as="h3" size="md" color="blue.700">14. Force Majeure</Heading>
                    <Text>
                        ABN shall not be held liable for failure or delay in performance caused by events beyond its
                        reasonable control, including government regulations, economic collapse, currency devaluation,
                        or natural disasters.
                    </Text>

                    <Heading as="h3" size="md" color="blue.700">15. Severability</Heading>
                    <Text>
                        If any clause of this Agreement is held invalid or unenforceable, such provision shall be interpreted
                        in a manner that best reflects the parties’ intention, while the remaining provisions shall remain
                        in full force and effect.
                    </Text>

                    <Heading as="h3" size="md" color="blue.700">16. Entire Agreement</Heading>
                    <Text>
                        This document represents the entire understanding between the Investor and ABN NARINOHS LTD,
                        superseding all previous communications, oral or written, relating to the investment.
                    </Text>

                    <Text fontWeight="bold" mt={6}>IN WITNESS WHEREOF, the parties hereby execute this Agreement as a binding document.</Text>
                </VStack>
            </Box>
        </NoAuthLayout>
    );
}
