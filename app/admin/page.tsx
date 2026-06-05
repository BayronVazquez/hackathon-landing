"use client";

import { useCallback, useEffect, useState } from "react";
import { getWaitlistSignups, type WaitlistSignup } from "@/lib/waitlist-admin";

const montserrat = "var(--font-montserrat), Montserrat, sans-serif";
const outfit = "var(--font-outfit), Outfit, sans-serif";

function formatDate(date: Date | null) {
  if (!date) return "—";
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function AdminPage() {
  const [signups, setSignups] = useState<WaitlistSignup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadSignups = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      setSignups(await getWaitlistSignups());
    } catch (err) {
      setSignups([]);
      const code =
        err && typeof err === "object" && "code" in err
          ? String(err.code)
          : "";

      setError(
        code === "permission-denied"
          ? "Firestore blocked reads. Publish the updated rules in Firebase Console → Firestore → Rules."
          : err instanceof Error
            ? err.message
            : "Failed to load signups.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSignups();
  }, [loadSignups]);

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <p
          className="text-xs tracking-[0.35em] text-[#aaff00]/80"
          style={{ fontFamily: outfit }}
        >
          BUILD PA&apos;L NORTE
        </p>
        <h1
          className="mt-2 text-3xl font-black"
          style={{ fontFamily: montserrat }}
        >
          Waitlist Admin
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="rounded-2xl border border-[#aaff00]/25 bg-[#aaff00]/5 px-6 py-4">
            <p className="text-sm text-white/50" style={{ fontFamily: outfit }}>
              Total signups
            </p>
            <p
              className="mt-1 text-4xl font-black text-[#aaff00]"
              style={{ fontFamily: montserrat }}
            >
              {loading ? "…" : signups.length}
            </p>
          </div>
          <button
            type="button"
            onClick={loadSignups}
            disabled={loading}
            className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/70 transition-opacity hover:opacity-80 disabled:opacity-40"
            style={{ fontFamily: outfit }}
          >
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {error && (
          <p className="mt-6 text-sm text-red-400" style={{ fontFamily: outfit }}>
            {error}
          </p>
        )}

        {!loading && !error && signups.length > 0 && (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-white/[0.03] text-white/50">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Signed up</th>
                </tr>
              </thead>
              <tbody>
                {signups.map((signup) => (
                  <tr
                    key={signup.id}
                    className="border-t border-white/8 text-white/85"
                  >
                    <td className="px-4 py-3" style={{ fontFamily: outfit }}>
                      {signup.name}
                    </td>
                    <td className="px-4 py-3" style={{ fontFamily: outfit }}>
                      {signup.email}
                    </td>
                    <td
                      className="px-4 py-3 text-white/50"
                      style={{ fontFamily: outfit }}
                    >
                      {formatDate(signup.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && !error && signups.length === 0 && (
          <p className="mt-8 text-white/50" style={{ fontFamily: outfit }}>
            No signups yet.
          </p>
        )}
      </div>
    </main>
  );
}
