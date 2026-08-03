"use client";

import Image from "next/image";
import {
  Stethoscope,
  Sparkles,
  Syringe,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Users,
  ScrollText,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ConfettiButton } from "@/components/ui/confetti";
import { FadeIn } from "@/components/resume/fade-in";
import {
  contact,
  summary,
  skillGroups,
  experience,
  education,
  internship,
  extraCurricular,
  personalDetails,
} from "@/lib/resume-data";

const skillIcons = [Stethoscope, Sparkles, Syringe];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md shadow-orange-500/20">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex-1">
      <header className="border-b border-zinc-200 px-6 py-20 text-center dark:border-zinc-800">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="relative mx-auto mb-8 h-40 w-40 sm:h-48 sm:w-48">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-orange-400/25 blur-3xl dark:bg-orange-500/10" />
              <div className="relative h-full w-full overflow-hidden rounded-full shadow-xl shadow-orange-500/10 ring-1 ring-orange-300/60 ring-offset-4 ring-offset-white dark:ring-orange-400/20 dark:ring-offset-[#0a0a0a]">
                <Image
                  src="/profile.png"
                  alt="Dr. Monika Manish Gupta"
                  fill
                  sizes="192px"
                  priority
                  className="object-cover object-[50%_20%]"
                />
              </div>
              <span className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-500 shadow-sm dark:border-orange-900/40 dark:bg-zinc-950 dark:text-orange-400">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
            </div>
          </FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm text-orange-900 dark:border-orange-900/40 dark:bg-orange-950/30 dark:text-orange-200">
            ✨ B.H.M.S · Cosmetology & Aesthetics
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl dark:text-zinc-50">
            Dr. Monika Manish Gupta
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            Medical Cosmetologist & Aesthetic Physician — personalized skincare,
            advanced aesthetic treatments, and attentive patient care.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full" onClick={() => scrollTo("experience")}>
              View Experience
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </Button>
            
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-20 space-y-24">
        {/* Summary */}
        <FadeIn>
          <SectionHeading icon={Stethoscope} title="Summary" />
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            {summary}
          </p>
        </FadeIn>

        {/* Skills */}
        <section>
          <FadeIn>
            <SectionHeading icon={Sparkles} title="Skills" />
          </FadeIn>
          <div className="space-y-10">
            {skillGroups.map((group, i) => {
              const Icon = skillIcons[i] ?? Sparkles;
              return (
                <FadeIn key={group.title} delay={i * 100}>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                    <Icon className="h-5 w-5 text-orange-500" />
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm text-orange-900 dark:border-orange-900/40 dark:bg-orange-950/30 dark:text-orange-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* Experience */}
        <FadeIn>
          <div id="experience">
            <SectionHeading icon={Briefcase} title="Experience" />
            <h3 className="mb-4 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              {experience.role}
            </h3>
            <ul className="space-y-3">
              {experience.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-zinc-600 dark:text-zinc-300 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn>
          <SectionHeading icon={GraduationCap} title="Education" />
          <div className="space-y-5">
            {education.map((item) => (
              <div
                key={item.institution}
                className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.institution}
                  </p>
                  {item.period && (
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.period}
                    </span>
                  )}
                </div>
                <p className="text-zinc-600 dark:text-zinc-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Internship */}
        <FadeIn>
          <SectionHeading icon={HeartHandshake} title="Internship" />
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              {internship.place}
            </h3>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {internship.period}
            </span>
          </div>
          <ul className="space-y-3">
            {internship.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-zinc-600 dark:text-zinc-300 leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Extra-Curricular Activities */}
        <FadeIn>
          <SectionHeading icon={Users} title="Extra-Curricular Activities" />
          <ul className="space-y-3">
            {extraCurricular.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-zinc-600 dark:text-zinc-300 leading-relaxed"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                {point}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Personal Details */}
        <FadeIn>
          <SectionHeading icon={Users} title="Personal Details" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-zinc-200 px-4 py-3 dark:border-zinc-800"
              >
                <p className="text-xs uppercase tracking-wide text-zinc-400">
                  {item.label}
                </p>
                <p className="font-medium text-zinc-800 dark:text-zinc-100">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Declaration */}
        <FadeIn>
          <SectionHeading icon={ScrollText} title="Declaration" />
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I hereby declare that the information provided above is true and correct
            to the best of my knowledge.
          </p>
          <p className="mt-6 font-semibold text-zinc-900 dark:text-zinc-50">
            {contact.name}
          </p>
        </FadeIn>

        {/* Contact */}
        <FadeIn>
          <div
            id="contact"
            className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Get in Touch
            </h2>
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-zinc-600 hover:text-orange-600 hover:underline dark:text-zinc-300 dark:hover:text-orange-400"
              >
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-500" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-zinc-600 hover:text-orange-600 hover:underline dark:text-zinc-300 dark:hover:text-orange-400"
              >
                <Phone className="h-5 w-5 flex-shrink-0 text-orange-500" />
                {contact.phone}
              </a>
              <p className="flex items-start gap-3 text-zinc-600 dark:text-zinc-300">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                {contact.address}
              </p>
            </div>
          </div>
        </FadeIn>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} {contact.name}
      </footer>
    </div>
  );
}
